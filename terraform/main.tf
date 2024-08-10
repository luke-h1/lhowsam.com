data "aws_caller_identity" "current" {}

module "single_zone" {
  source  = "RJPearson94/open-next/aws//modules/tf-aws-open-next-zone"
  version = ">= 2.0.0, < 3.0.0"

  prefix      = "lho-${data.aws_caller_identity.current.account_id}"
  folder_path = "./.open-next"
}