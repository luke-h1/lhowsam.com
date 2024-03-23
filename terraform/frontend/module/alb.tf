resource "aws_default_vpc" "default_vpc" {
}

resource "aws_ecs_cluster" "application_cluster" {
  name = "${var.project_name}-${var.environment}-cluster"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = merge(var.tags, {
    "Name" = "${var.project_name}-${var.environment}-cluster"
  })
}

resource "aws_default_subnet" "application_subnet_a" {
  availability_zone = "eu-west-2a"
}

resource "aws_default_subnet" "application_subnet_b" {
  availability_zone = "eu-west-2b"
}

resource "aws_default_subnet" "application_subnet_c" {
  availability_zone = "eu-west-2c"
}

resource "aws_alb" "application_load_balancer" {
  name               = "${var.project_name}-lb-${var.environment}"
  load_balancer_type = "application"
  subnets = [
    "${aws_default_subnet.application_subnet_a.id}",
    "${aws_default_subnet.application_subnet_b.id}",
    "${aws_default_subnet.application_subnet_c.id}"
  ]
  security_groups = ["${aws_security_group.application_load_balancer_security_group.id}"]
  tags = merge(var.tags, {
    "Name" = "${var.project_name}-${var.environment}-lb"
  })
}


resource "aws_security_group" "application_load_balancer_security_group" {
  name = "${var.project_name}-${var.environment}-lb-security-group"
  tags = merge(var.tags, {
    "Name" = "${var.project_name}-${var.environment}-lb-security-group"
  })

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_lb_target_group" "application_target_group" {
  name = "${var.project_name}-${var.environment}-tg"
  tags = merge(var.tags, {
    "Name" = "${var.project_name}-${var.environment}-tg"
  })
  port                          = 80
  protocol                      = "HTTP"
  target_type                   = "ip"
  vpc_id                        = aws_default_vpc.default_vpc.id
  deregistration_delay          = 300
  load_balancing_algorithm_type = "least_outstanding_requests"

  health_check {
    matcher           = "200,301,302"
    path              = "/api/healthcheck"
    interval          = 60
    timeout           = 30
    healthy_threshold = 3
  }
}

# add a listener to redirect any http traffic to https
resource "aws_lb_listener" "web_http" {
  load_balancer_arn = aws_alb.application_load_balancer.arn
  port              = 80
  protocol          = "HTTP"
  tags = merge(var.tags, {
    "Name"        = "${var.project_name}-${var.environment}-http-listener"
    "Description" = "Redirect HTTP to HTTPS listener"
  })

  default_action {
    type = "redirect"

    redirect {
      port        = 443
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# forward https traffic to the target group
resource "aws_lb_listener" "web_https" {
  load_balancer_arn = aws_alb.application_load_balancer.arn
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = aws_acm_certificate_validation.domain.certificate_arn
  tags = merge(var.tags, {
    "Name"        = "${var.project_name}-${var.environment}-https-listener"
    "Description" = "Forward HTTPS traffic to the target group"
  })

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.application_target_group.arn
  }
}

# create an entry in route53 for the load balancer and the given domain
resource "aws_route53_record" "alb" {
  zone_id = data.aws_route53_zone.domain.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_alb.application_load_balancer.dns_name
    zone_id                = aws_alb.application_load_balancer.zone_id
    evaluate_target_health = true
  }
}

resource "aws_security_group" "application_service_security_group" {
  tags = merge(var.tags, {
    "Name"        = "${var.project_name}-${var.environment}-sg-group"
    "Description" = "Security group for ${var.project_name}-${var.environment}"
  })

  ingress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    security_groups = ["${aws_security_group.application_load_balancer_security_group.id}"]
  }

  ingress {
    from_port       = 80
    to_port         = 80
    protocol        = "tcp"
    security_groups = ["${aws_security_group.application_load_balancer_security_group.id}"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}