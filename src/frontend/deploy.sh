#!/bin/bash

echo "starting deploy"
npm run format && npm run lint && npm run test && npm run cy:ci && vc -f && vc --prod -f
echo "SUCCESFULLY DEPLOYED TO PRODUCTION"
