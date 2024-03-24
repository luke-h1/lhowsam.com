#!/bin/bash

cd apps/lambda
pnpm build
cd ../../
zip -r terraform/lambda/dist/lambda.zip apps/lambda/dist