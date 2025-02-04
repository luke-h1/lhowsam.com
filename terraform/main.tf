data "aws_caller_identity" "current" {}

# │ Error running command '/bin/bash .terraform/modules/single_zone/modules/tf-aws-lambda/scripts/  update-alias.sh': exit status 254. Output:
# │ An error occurred (ResourceNotFoundException) when calling the UpdateAlias operation: Function not found:
# │ arn:aws:lambda:eu-west-2:<>:function:lhowsam-web-stg-server-function:1

module "single_zone" {
  source            = "RJPearson94/open-next/aws//modules/tf-aws-open-next-zone"
  version           = "3.1.0"
  open_next_version = "v3.0.7"

  prefix             = "lho-stg"
  folder_path        = "../.open-next"
  s3_exclusion_regex = ".*\\.terragrunt*"

  continuous_deployment = {
    use        = true
    deployment = "NONE"
    traffic_config = {
      header = {
        name  = "aws-cf-cd-staging"
        value = "true"
      }
    }
  }

  website_bucket = {
    force_destroy = true
  }
  providers = {
    aws                 = aws
    aws.server_function = aws.server_function
    aws.iam             = aws.iam
    aws.dns             = aws.dns
    aws.global          = aws.global
  }
}

provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "server_function"
  region = "eu-west-2"
}

provider "aws" {
  alias  = "iam"
  region = "eu-west-2"
}

provider "aws" {
  alias  = "dns"
  region = "us-west-2"
}

provider "aws" {
  alias  = "global"
  region = "eu-west-2"
}