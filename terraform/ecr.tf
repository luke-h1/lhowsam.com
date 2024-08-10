
resource "aws_ecr_repository" "ecr_repo" {
  name                 = "${var.project_name}-ecr-repo-${var.env}"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }
}
