variable "docker_image_tag" {
  type        = string
  description = "The tag of the Docker image to deploy"
}

variable "project_name" {
  type        = string
  description = "The name of the project"
}

variable "environment" {
  type        = string
  description = "The environment to deploy to"
}

variable "task_count" {
  type        = number
  description = "The number of tasks to run"
  default     = 1
}

variable "tags" {
  description = "Tags for the resources"
  type        = map(string)
  default = {
    "Service" = "lhowsam.com"
  }
}
variable "container_variables" {
  description = "The environment variables to pass to the container"
  type        = map(string)
  default = {
    "NODE_ENV" = "production"
  }
}

variable "cpu" {
  description = "The number of CPU units to reserve for the task"
  type        = number
  default     = 256
}

variable "memory" {
  description = "The amount of memory to reserve for the task"
  type        = number
  default     = 512
}

variable "domain" {
  description = "The domain to use for the load balancer"
  type        = string
}

variable "port" {
  description = "The port to use for the load balancer"
  type        = number
  default     = 3000
}

variable "max_capacity" {
  description = "The maximum capacity for the autoscaling group"
  type        = number
  default     = 3
}

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