resource "aws_vpc" "vpc" {
  cidr_block                       = "10.0.0.0/16"
  enable_dns_support               = true
  enable_dns_hostnames             = true
  assign_generated_ipv6_cidr_block = true
}

resource "aws_subnet" "public_subnet" {
  vpc_id                          = aws_vpc.vpc.id
  cidr_block                      = "10.0.0.0/20"
  ipv6_cidr_block                 = aws_vpc.vpc.ipv6_cidr_block
  map_public_ip_on_launch         = true
  assign_ipv6_address_on_creation = true
  availability_zone               = "${var.aws_region}a"
}

resource "aws_subnet" "private_egress_subnet" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = "10.0.80.0/20"
  map_public_ip_on_launch = false
  availability_zone       = "${var.aws_region}a"
}

resource "aws_subnet" "private_isolated_subnet" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = "10.0.129.0/24"
  map_public_ip_on_launch = false
  availability_zone       = "${var.aws_region}a"
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_egress_only_internet_gateway" "eigw" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_route" "route_eigw" {
  route_table_id              = aws_vpc.vpc.main_route_table_id
  destination_ipv6_cidr_block = "::/0"
  egress_only_gateway_id      = aws_egress_only_internet_gateway.eigw.id
}

resource "aws_route" "route_igw" {
  route_table_id         = aws_vpc.vpc.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}
