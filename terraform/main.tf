data "aws_caller_identity" "current" {}

# │ Error running command '/bin/bash .terraform/modules/single_zone/modules/tf-aws-lambda/scripts/  update-alias.sh': exit status 254. Output:
# │ An error occurred (ResourceNotFoundException) when calling the UpdateAlias operation: Function not found:
# │ arn:aws:lambda:eu-west-2:<>:function:lhowsam-web-stg-server-function:1

module "single_zone" {
  source  = "RJPearson94/open-next/aws//modules/tf-aws-open-next-zone"
  version = "3.1.0"

  prefix = "lhowsam-web-stg"
  providers = {
    aws                 = aws
    aws.server_function = aws.server_function
    aws.iam             = aws.iam
    aws.dns             = aws.dns
    aws.global          = aws.global
  }
  folder_path       = "../.open-next"
  open_next_version = "v3.0.7"
}

provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "server_function"
  region = "us-west-2"
}

provider "aws" {
  alias  = "iam"
  region = "us-west-2"
}

provider "aws" {
  alias  = "dns"
  region = "us-west-2"
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"
}