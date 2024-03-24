#!/bin/bash


if [ "$1" == "staging" ]; then
  terraform workspace select staging -or-create
  cd apps/lambda 
  pnpm build
  cd ../../
  cd terraform/lambda
  cp -r ../../apps/lambda/dist/ dist
  terraform apply -var-file="envs/staging.tfvars" -auto-approve
elif [ "$1" == "live" ]; then
  terraform workspace select live -or-create
  cd apps/lambda 
  pnpm build
  cd ../../
  cd terraform/lambda
  terraform apply -var-file="envs/live.tfvars" -auto-approve
else
  echo "Invalid choice"
  exit 1
fi

