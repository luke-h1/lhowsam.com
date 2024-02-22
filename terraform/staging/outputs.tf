output "ecr_repo_name" {
  description = "The name of the ECR repository"
  value       = module.staging_infra.module_ecr_repo_name
}

output "alb_dns_name" {
  value = module.staging_infra.alb_dns_name
}

output "alb_target_group_arn" {
  value = module.staging_infra.alb_target_group_arn
}

output "alb_listener_arn" {
  value = module.staging_infra.alb_listener_arn
}
