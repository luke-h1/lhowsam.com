
resource "aws_security_group" "internal_service_sg" {
  vpc_id      = aws_vpc.vpc.id
  description = "Security group that may be used for allowing traffic between services in the environment."
}

resource "aws_security_group_rule" "internal_service_sg_egress" {
  security_group_id = aws_security_group.internal_service_sg.id
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  // Allow all IPv6 and IPv4 traffic
  cidr_blocks      = ["0.0.0.0/0"]
  ipv6_cidr_blocks = ["::/0"]
}

resource "aws_apigatewayv2_api" "nextjs_api" {
  name          = "nextjs-api-${var.project_name}-${var.env}"
  protocol_type = "HTTP"
  # When using a custom domain name, you must set this to true
  # disable_execute_api_endpoint = true
}

resource "aws_apigatewayv2_stage" "nextjs_api_stage" {
  api_id      = aws_apigatewayv2_api.nextjs_api.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_service_discovery_private_dns_namespace" "discovery_namespace" {
  vpc  = aws_vpc.vpc.id
  name = "${var.project_name}-${var.env}.internal"
}

resource "aws_service_discovery_service" "nextjs_service_discovery" {
  name = "dns.nextjs" # dns.nextjs.${var.project_name}-${var.env}.internal
  dns_config {
    namespace_id = aws_service_discovery_private_dns_namespace.discovery_namespace.id
    dns_records {
      ttl  = 60
      type = "A"
    }
    dns_records {
      ttl  = 60
      type = "AAAA"
    }
    dns_records {
      ttl  = 60
      type = "SRV"
    }
    routing_policy = "MULTIVALUE"
  }

  health_check_custom_config {
    failure_threshold = 1
  }
}


resource "aws_apigatewayv2_integration" "nextjs_integration" {
  api_id                 = aws_apigatewayv2_api.nextjs_api.id
  connection_id          = aws_apigatewayv2_vpc_link.apigw_vpc_link.id
  connection_type        = "VPC_LINK"
  integration_type       = "HTTP_PROXY"
  integration_method     = "ANY"
  integration_uri        = aws_service_discovery_service.nextjs_service_discovery.arn
  payload_format_version = "1.0"
}


resource "aws_apigatewayv2_route" "nextjs_route" {
  api_id    = aws_apigatewayv2_api.nextjs_api.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.nextjs_integration.id}"
}

resource "aws_apigatewayv2_vpc_link" "apigw_vpc_link" {
  name               = "${var.project_name}-nextjs-link-${var.env}"
  security_group_ids = [aws_security_group.internal_service_sg.id]
  subnet_ids         = [aws_subnet.public_subnet.id]
}

resource "aws_security_group" "nextjs_service_sg" {
  vpc_id = aws_vpc.vpc.id
  ingress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    # Only allowing traffic in from the vpc link security group
    security_groups = [aws_security_group.internal_service_sg.id]
  }

  egress {
    from_port = 0    # Allow any incoming port
    to_port   = 0    # Allow any outgoing port
    protocol  = "-1" # Allow any outgoing protocol 
    # Allow all IPv6 and IPv4 traffic
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}


// ------------------------------------------------------------
// CLOUDFRONT
// ------------------------------------------------------------
resource "aws_cloudfront_distribution" "nextjs_cdn" {
  enabled         = true
  is_ipv6_enabled = true
  origin {
    origin_id = "default"
    # Use the API gateway as the origin
    domain_name = "${aws_apigatewayv2_api.nextjs_api.id}.execute-api.${var.aws_region}.amazonaws.com"
    custom_origin_config {
      origin_keepalive_timeout = 60
      origin_read_timeout      = 60
      origin_protocol_policy   = "https-only"
      http_port                = 80
      https_port               = 443
      origin_ssl_protocols     = ["TLSv1.2"]
    }
  }
  # This is the cheapest price class, targets the US, Canada, and Europe
  price_class = "PriceClass_100"
  default_cache_behavior {
    allowed_methods          = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods           = ["GET", "HEAD"]
    target_origin_id         = "default"
    viewer_protocol_policy   = "redirect-to-https"
    cache_policy_id          = aws_cloudfront_cache_policy.next_cdn_cache_policy.id
    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.all_viewer_except_host_header.id
    compress                 = true # Compress response objects automatically
  }
  viewer_certificate {
    cloudfront_default_certificate = true
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

resource "aws_cloudfront_cache_policy" "next_cdn_cache_policy" {
  name = "nextjs-cdn-cache-policy"
  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "all"
    }
    enable_accept_encoding_gzip   = true
    enable_accept_encoding_brotli = true
  }
  min_ttl     = 0
  default_ttl = 0 # Force the CDN to always check the origin for the latest content unless a cache-control header is set
}

# When not using a custom domain name, ignore the host header. Otherwise you'd use
# the "AllViewerAndCloudFrontHeaders-2022-06" policy with ID "33f36d7e-f396-46d9-90e0-52428a34d9dc"
data "aws_cloudfront_origin_request_policy" "all_viewer_except_host_header" {
  # See: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html#managed-origin-request-policy-all-viewer-except-host-header
  id = "b689b0a8-53d0-40ab-baf2-68738e2966ac"
}