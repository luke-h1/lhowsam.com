variable "env" {
  type        = string
  description = "The environment to deploy to"
}

variable "zone_id" {
  type        = string
  description = "The zone id for the route53 record"
}


variable "root_domain" {
  type        = string
  description = "The root domain for the route53 record"
  default     = "lhowsam.com"
}


variable "sub_domain" {
  type        = string
  description = "The sub domain for the route53 record"
}

variable "deployed_by" {
  type        = string
  description = "The user who deployed the lambda"
}

variable "tags" {
  type        = map(string)
  description = "The tags to apply to the resources"
  default = {
    "Service"   = "lhowsam-web"
    "ManagedBy" = "Terraform"
  }
}

variable "git_sha" {
  type        = string
  description = "The git sha of the commit that caused the deploy"
  default     = "unknown"
}

variable "project_name" {
  type        = string
  description = "The name of the project"
  default     = "lhowsam"
}

variable "public_url" {
  type        = string
  description = "The base URL of the deployed frontend"
  default     = "test.lhowsam.com"
}

variable "sanity_project_id" {
  type        = string
  description = "The sanity project ID"
}


variable "environment_variables" {
  type = map(string)
  default = {
    Environment                          = var.env
    DEPLOYED_AT                          = timestamp()
    DEPLOYED_BY                          = var.deployed_by
    GIT_SHA                              = var.git_sha
    NEXT_PUBLIC_URL                      = var.public_url
    NEXT_PUBLIC_SANITY_PROJECT_ID        = var.sanity_project_id
    NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL = "https://nowplaying-staging.lhowsam.com"
  }
}
