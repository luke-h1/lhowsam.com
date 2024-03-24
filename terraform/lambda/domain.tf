resource "aws_acm_certificate" "cert" {
  private_key       = var.private_key
  certificate_body  = var.certificate_body
  certificate_chain = var.certificate_chain
  tags = {
    Name    = "Nowplaying certificate for ${var.env}"
    stage   = var.env
    service = "nowplaying"
  }
}
