output "function_name" {
  description = "value of the lambda function name"
  value       = aws_lambda_function.lambda.function_name
}

output "base_url" {
  description = "Base URL of the API Gateway stage"
  value       = aws_apigatewayv2_stage.lambda_stage.invoke_url
}
