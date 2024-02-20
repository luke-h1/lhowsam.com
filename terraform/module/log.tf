resource "aws_cloudwatch_log_group" "app_log_group" {
  name = "${var.project_name}-${var.environment}-cluster-logs"

  tags = merge(var.tags, {
    "Name" = "${var.project_name}-${var.environment}-cluster-logs"
  })
}