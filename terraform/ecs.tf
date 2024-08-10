resource "aws_ecs_cluster" "ecs_cluster" {
  name = "${var.project_name}-cluster-${var.env}"
  service_connect_defaults {
    namespace = aws_service_discovery_private_dns_namespace.discovery_namespace.arn
  }
}

resource "aws_ecs_cluster_capacity_providers" "ecs_cluster_capacity_providers" {
  cluster_name       = aws_ecs_cluster.ecs_cluster.name
  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
}


data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ecs_task_role" {
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  role       = aws_iam_role.ecs_task_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_ecs_task_definition" "nextjs_task" {
  family                   = "${var.project_name}-nextjs-${var.env}"
  container_definitions    = <<DEFINITION
  [
    {
      "name": "nextjs-container",
      "image": "${aws_ecr_repository.application_ecr_repo.repository_url}:${var.docker_image_tag}",
      "essential": true,
      "environment": [
        {
          "name": "NEXT_PUBLIC_SANITY_PROJECT_ID",
          "value": "${var.sanity_project_id}"
        },
        {
          "name": "NEXT_PUBLIC_URL",
          "value": "${var.url}"
        },
        {
          "name": "NEXT_PUBLIC_GA_TRACKING_ID",
          "value": "${var.ga_tracking_id}"
        },
        {
          "name": "NEW_RELIC_APP_NAME",
          "value": "${var.new_relic_app_name}"
        },
        {
          "name": "NEW_RELIC_LICENSE_KEY",
          "value": "${var.new_relic_license_key}"
        },
        {
          "name": "NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL",
          "value": "https://nowplaying-staging.lhowsam.com"
        }
      ],
      "portMappings": [
        {
          "containerPort": 3000,
          "hostPort": 3000
        }
      ],
      "linuxParameters": {
        "initProcessEnabled": true
      },
      "memory": 512,
      "cpu": 256
    }
  ]
  DEFINITION
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  memory                   = 512
  cpu                      = 256
  runtime_platform {
    cpu_architecture        = upper(var.cpu_arch)
    operating_system_family = "LINUX"
  }
  execution_role_arn = aws_iam_role.ecs_task_role.arn
}

resource "aws_ecs_service" "nextjs_service" {
  name            = "${var.project_name}-${var.env}"
  cluster         = aws_ecs_cluster.ecs_cluster.id
  task_definition = aws_ecs_task_definition.nextjs_task.arn
  desired_count   = 1

  capacity_provider_strategy {
    capacity_provider = "FARGATE"
    weight            = 1
  }

  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 50 # Using 50% ensures the service is available but makes rolling updates much faster

  # Cause the deployment to fail and rollback if the service is unable to stabilize
  deployment_circuit_breaker {
    enable   = true
    rollback = true
  }

  network_configuration {
    subnets          = [aws_subnet.public_subnet.id] # Deploy the public subnet, bypassing the need for a NAT gateway
    assign_public_ip = true                          # Assign a public IP to the container for internet access
    security_groups  = [aws_security_group.nextjs_service_sg.id]
  }

  # Register the service with the service discovery namespace
  service_registries {
    registry_arn   = aws_service_discovery_service.nextjs_service_discovery.arn
    container_name = "nextjs-container"
    container_port = 3000
  }

  lifecycle {
    ignore_changes = [desired_count]
  }
}

