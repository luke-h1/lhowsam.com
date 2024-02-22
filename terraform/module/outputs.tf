output "module_ecr_repo_name" {
  value       = aws_ecr_repository.application_ecr_repo.name
  description = "The name of the ECR repository"
}

output "alb_dns_name" {
  value       = var.domain
  description = "The DNS name of the ALB load balancer"
}

output "alb_target_group_arn" {
  value = aws_lb_target_group.application_target_group.arn
}

output "alb_listener_arn" {
  value = aws_lb_listener.web_https.arn
}