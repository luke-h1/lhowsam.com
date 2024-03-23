resource "aws_apigatewayv2_api" "lambda" {
  name                         = "now-playing-gw-${var.env}"
  protocol_type                = "HTTP"
  disable_execute_api_endpoint = false
  cors_configuration {
    allow_headers  = ["*"]
    allow_origins  = ["*"]
    allow_methods  = ["*"]
    expose_headers = ["*"]
  }
}

resource "aws_apigatewayv2_domain_name" "domain_name" {
  domain_name = var.env == "live" ? "nowplaying.${var.root_domain}" : "nowplaying.${var.env}.${var.root_domain}"

  domain_name_configuration {
    certificate_arn = aws_acm_certificate.cert.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

# maps the domain to the stage of the api
resource "aws_apigatewayv2_api_mapping" "lambda" {
  api_id      = aws_apigatewayv2_api.lambda.id
  domain_name = aws_apigatewayv2_domain_name.domain_name.domain_name
  stage       = aws_apigatewayv2_stage.lambda_stage.id
}

resource "aws_apigatewayv2_stage" "lambda_stage" {
  api_id      = aws_apigatewayv2_api.lambda.id
  name        = var.env
  auto_deploy = true
  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_gw.arn
    format = jsonencode({
      requestId               = "$context.requestId"
      sourceIp                = "$context.identity.sourceIp"
      requestTime             = "$context.requestTime"
      protocol                = "$context.protocol"
      httpMethod              = "$context.httpMethod"
      resourcePath            = "$context.resourcePath"
      routeKey                = "$context.routeKey"
      status                  = "$context.status"
      responseLength          = "$context.responseLength"
      integrationErrorMessage = "$context.integrationErrorMessage"
      }
    )
  }
}
resource "aws_cloudwatch_log_group" "api_gw" {
  name              = "/aws/api_gw/${aws_apigatewayv2_api.lambda.name}-${var.env}"
  retention_in_days = 30
}

resource "aws_apigatewayv2_integration" "lambda" {
  api_id             = aws_apigatewayv2_api.lambda.id
  integration_uri    = aws_lambda_function.lambda.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

# ROUTES 
##############################################################################
resource "aws_apigatewayv2_route" "lambda_route_health" {
  api_id           = aws_apigatewayv2_api.lambda.id
  target           = "integrations/${aws_apigatewayv2_integration.lambda.id}"
  route_key        = "GET /api/health"
  api_key_required = false
  operation_name   = "health"
}

resource "aws_apigatewayv2_route" "lambda_route_health_head" {
  api_id           = aws_apigatewayv2_api.lambda.id
  target           = "integrations/${aws_apigatewayv2_integration.lambda.id}"
  route_key        = "HEAD /api/health"
  api_key_required = false
  operation_name   = "head health"
}

resource "aws_apigatewayv2_route" "lambda_route_version" {
  api_id           = aws_apigatewayv2_api.lambda.id
  target           = "integrations/${aws_apigatewayv2_integration.lambda.id}"
  route_key        = "GET /api/version"
  api_key_required = false
  operation_name   = "version"
}

resource "aws_apigatewayv2_route" "lambda_route_now_playing" {
  api_id           = aws_apigatewayv2_api.lambda.id
  target           = "integrations/${aws_apigatewayv2_integration.lambda.id}"
  route_key        = "GET /api/now-playing"
  api_key_required = false
  operation_name   = "now-playing"
}
##############################################################################


# CLOUDWATCH
##############################################################################
resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}

##############################################################################
