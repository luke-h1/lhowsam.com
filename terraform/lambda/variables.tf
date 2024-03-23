variable "env" {
  type        = string
  description = "The environment to deploy to"
}

variable "env_vars" {
  type        = map(string)
  description = "The environment variables to set on lambda"
  validation {
    condition     = contains(keys(var.env_vars), "SPOTIFY_CLIENT_ID") && contains(keys(var.env_vars), "SPOTIFY_CLIENT_SECRET") && contains(keys(var.env_vars), "SPOTIFY_REFRESH_TOKEN")
    error_message = "env_vars must contain keys: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN"
  }
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
