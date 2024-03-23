#!/bin/bash

if [ "$1" == "staging" ]; then
  terraform workspace select staging
  cd terraform
  terraform destroy -var-file="envs/staging.tfvars" -auto-approve
elif [ "$1" == "live" ]; then
  terraform workspace select live
  cd terraform
  terraform destroy -var-file="envs/live.tfvars" -auto-approve
else
  echo "Invalid choice"
  exit 1
fi
