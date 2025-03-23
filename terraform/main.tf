provider "aws" {
  alias  = "primary"
  region = "eu-west-2"
}

provider "aws" {
  alias = "server_function"
}

provider "aws" {
  alias = "iam"
}

provider "aws" {
  alias = "dns"
}

provider "aws" {
  alias  = "global"
  region = "us-east-1"
}

module "open_next_zone" {
  source  = "RJPearson94/open-next/aws//modules/tf-aws-open-next-zone"
  version = "3.2.0"

  providers = {
    aws                 = aws.primary
    aws.server_function = aws.server_function
    aws.iam             = aws.iam
    aws.dns             = aws.dns
    aws.global          = aws.global
  }

  prefix           = "${var.project_name}-${var.env}"
  s3_folder_prefix = "${var.project_name}-${var.env}"

  folder_path        = "./.open-next"
  s3_exclusion_regex = ".*\\.terragrunt*"

  origin_timeouts = {
    keepalive_timeout   = 60
    read_timeout        = 60
    connection_attempts = 2
    connection_timeout  = 5
  }

  distribution = {
    cache_policy = {
      enable_accept_encoding_brotli = true
      enable_accept_encoding_gzip   = true
    }
  }

  continuous_deployment = {
    use        = false
    deployment = "NONE"
    traffic_config = {
      header = {
        name  = "aws-cf-cd-staging"
        value = "true"
      }
    }
  }

  additional_server_functions = {
    iam_policies = {
      include_bucket_access             = true
      include_revalidation_queue_access = true
      include_tag_mapping_db_access     = true
    }
  }

  website_bucket = {
    force_destroy = true
  }
  open_next_version = "v3.x.x"
}

data "aws_caller_identity" "current" {
  provider = aws.primary
}
