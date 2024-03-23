data "terraform_remote_state" "vpc" {
  backend   = "s3"
  workspace = var.env
  config = {
    bucket = var.env == "live" ? "nowplaying-live-terraform-state" : "nowplaying-staging-terraform-state"
    key    = var.env == "live" ? "vpc/live.tfstate" : "vpc/staging.tfstate"
    region = "eu-west-2"
  }
}
