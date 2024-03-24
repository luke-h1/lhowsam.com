#!/bin/bash

cd apps/lambda
pnpm build
cd ../../
cd terraform/lambda
cp -r ../../apps/lambda/dist/ dist
zip -r lambda.zip dist
