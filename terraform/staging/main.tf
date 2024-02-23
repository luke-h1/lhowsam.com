provider "aws" {
  region = "eu-west-2"
}


module "staging_infra" {
  source           = "../module"
  project_name     = "lhowsam"
  task_count       = 3
  cpu              = 256
  memory           = 512
  docker_image_tag = var.docker_image_tag
  domain           = "staging.lhowsam.com"
  max_capacity     = 3
  tags = {
    "Service"     = "lhowsam-staging"
    "Environment" = "staging"
  }
  next_public_ga_tracking_id           = var.next_public_ga_tracking_id
  next_public_new_relic_license_key    = var.next_public_new_relic_license_key
  next_public_new_relic_application_id = var.next_public_new_relic_application_id
  next_public_sanity_project_id        = var.next_public_sanity_project_id
  next_public_url                      = "https://staging.lhowsam.com"
  spotify_client_id                    = var.spotify_client_id
  spotify_client_secret                = var.spotify_client_secret
  spotify_refresh_token                = var.spotify_refresh_token
  environment                          = "staging"
}