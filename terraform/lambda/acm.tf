# required to add certificates + DNS for the API gateway rather than let cloudflare handle the routing

locals {
  domain_name = var.env == "live" ? "nowplaying.${var.root_domain}" : "nowplaying-staging.${var.root_domain}"
}

resource "aws_acm_certificate" "root_domain" {
  provider          = aws.us-east-1
  domain_name       = local.domain_name
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true

    # only set to false because we might need to do a full teardown
    prevent_destroy = false
  }
}

data "aws_route53_zone" "domain" {
  private_zone = false
  zone_id      = var.zone_id
}
