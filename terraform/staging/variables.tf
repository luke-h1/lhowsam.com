variable "docker_image_tag" {
  type        = string
  description = "value of the docker image tag"
}

variable "account_id" {
  type    = string
  default = "<YOUR_ACCOUNT_ID>"
}

variable "domain" {
  type    = string
  default = "lhowsam.com"
}

# TODO: clean up this duplication
# environment variables (todo: see if we can clean this up by using a map)
variable "next_public_sanity_project_id" {
  description = "The project ID for the Sanity.io project"
  type        = string
}

variable "next_public_url" {
  description = "The URL for the frontend"
  type        = string
}

variable "spotify_client_id" {
  description = "The client ID for the Spotify API"
  type        = string
}

variable "spotify_client_secret" {
  description = "The client secret for the Spotify API"
  type        = string
}

variable "spotify_refresh_token" {
  description = "The refresh token for the Spotify API"
  type        = string
}

variable "next_public_ga_tracking_id" {
  description = "GA4 tracking ID for the site"
  type        = string
  nullable    = true
}

variable "next_public_new_relic_license_key" {
  description = "New Relic license key for the site"
  type        = string
}

variable "next_public_new_relic_application_id" {
  description = "New Relic application ID for the site"
  type        = string
}

variable "basic_auth_password" {
  description = "The password for basic auth"
  type        = string
}

variable "basic_auth_user" {
  description = "The username for basic auth"
  type        = string
}