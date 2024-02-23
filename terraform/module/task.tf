resource "aws_ecs_task_definition" "application_task" {
  family                   = "${var.project_name}-${var.environment}"
  container_definitions    = <<DEFINITION
  [
    {
      "name": "${var.project_name}-${var.environment}",
      "image": "${aws_ecr_repository.application_ecr_repo.repository_url}:${var.docker_image_tag}",
      "essential": true,
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        },
        {
          "name": "NEXT_PUBLIC_SANITY_PROJECT_ID",
          "value": "${var.next_public_sanity_project_id}"
        },
        {
          "name": "NEXT_PUBLIC_URL",
          "value": "${var.next_public_url}"
        },
        {
          "name": "SPOTIFY_CLIENT_ID",
          "value": "${var.spotify_client_id}"
        },
        {
          "name": "SPOTIFY_CLIENT_SECRET",
          "value": "${var.spotify_client_secret}"
        },
        {
          "name": "SPOTIFY_REFRESH_TOKEN",
          "value": "${var.spotify_refresh_token}"
        },
        {
          "name": "NEXT_PUBLIC_GA_TRACKING_ID",
          "value": "${var.next_public_ga_tracking_id}"
        },
        {
          "name": "NEXT_PUBLIC_NEW_RELIC_LICENSE_KEY",
          "value": "${var.next_public_new_relic_license_key}"
        },
        {
          "name": "NEXT_PUBLIC_NEW_RELIC_APPLICATION_ID",
          "value": "${var.next_public_new_relic_application_id}"
        },
      ],
      "portMappings": [
        {
          "containerPort": 3000,
          "hostPort": 3000
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "${aws_cloudwatch_log_group.lho_log_group.name}",
          "awslogs-region": "eu-west-2",
          "awslogs-stream-prefix": "${var.project_name}-"
        }
      },
      "memory": ${var.memory},
      "cpu": ${var.cpu}
    }
  ]
  DEFINITION
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  memory                   = var.memory
  cpu                      = var.cpu
  execution_role_arn       = aws_iam_role.lhowsam_task_execution_role.arn
  task_role_arn            = aws_iam_role.lhowsam_task_execution_role.arn
  tags                     = var.tags
  # runtime_platform {
  #   cpu_architecture        = "ARM64"
  #   operating_system_family = "LINUX"
  # }
}

resource "aws_ecs_service" "application_ecs" {
  name            = "${var.project_name}-${var.environment}-cluster"
  cluster         = aws_ecs_cluster.application_cluster.id
  task_definition = aws_ecs_task_definition.application_task.arn
  launch_type     = "FARGATE"
  desired_count   = var.task_count
  load_balancer {
    target_group_arn = aws_lb_target_group.application_target_group.arn
    container_name   = aws_ecs_task_definition.application_task.family
    container_port   = var.port
  }

  network_configuration {
    subnets          = ["${aws_default_subnet.application_subnet_a.id}", "${aws_default_subnet.application_subnet_b.id}", "${aws_default_subnet.application_subnet_c.id}"]
    assign_public_ip = true
    security_groups  = ["${aws_security_group.application_service_security_group.id}"]
  }
}

resource "aws_appautoscaling_target" "ecs_target" {
  max_capacity       = 1
  min_capacity       = 1
  resource_id        = "service/${aws_ecs_cluster.application_cluster.name}/${aws_ecs_service.application_ecs.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"

}

resource "aws_appautoscaling_policy" "ecs_policy" {
  name               = "${var.project_name}-${var.environment}-scaling-policy-cpu"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs_target.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs_target.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs_target.service_namespace
  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value       = 75.0
    scale_in_cooldown  = 60
    scale_out_cooldown = 60
  }
}