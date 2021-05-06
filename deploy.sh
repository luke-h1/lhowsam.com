#!/bin/bash
echo "starting deploy"
npm run format && npm run lint && npx jest && vc --prod -f && vc -f 
echo "deployed to production"