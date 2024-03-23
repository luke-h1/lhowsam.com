resource "aws_acm_certificate" "cert" {
  private_key       = file("${path.module}/certs/${var.env}/private-key.pem")
  certificate_body  = file("${path.module}/certs/${var.env}/certificate.pem")
  certificate_chain = file("${path.module}/certs/${var.env}/certificate-chain.pem")
  tags = {
    Name    = "Nowplaying certificate for ${var.env}"
    stage   = var.env
    service = "nowplaying"
  }
}
