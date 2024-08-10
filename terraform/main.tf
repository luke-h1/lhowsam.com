
provider "aws" {
  alias  = "global"
  region = "eu-west-2" # Specify the appropriate region
}
provider "aws" {
  alias  = "server_function"
  region = "eu-west-2" # Specify the appropriate region for server functions
}

provider "aws" {
  alias  = "dns"
  region = "us-east-1" # Specify the appropriate region for DNS
}

provider "aws" {
  alias  = "iam"
  region = "eu-west-2" # Specify the appropriate region for serverless
}

data "aws_caller_identity" "current" {}

module "single_zone" {
  source  = "RJPearson94/open-next/aws//modules/tf-aws-open-next-zone"
  version = ">= 2.0.0, < 3.0.0"

  prefix      = "lho-${data.aws_caller_identity.current.account_id}"
  folder_path = "../.open-next"
  providers = {
    aws.global          = aws.global
    aws.server_function = aws.server_function
    aws.dns             = aws.dns
    aws.iam             = aws.iam
  }
}