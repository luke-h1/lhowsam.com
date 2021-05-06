#!/bin/bash
echo "starting deploy"
npm run format && npm run lint && vc --prod -f && vc -f 
echo "deployed to production"