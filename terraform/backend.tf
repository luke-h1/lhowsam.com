terraform {
  backend "s3" {
    bucket  = "lhowsam.com-tf-state"
    key     = "staging/terraform.tfstate"
    region  = "eu-west-2"
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}