#!/bin/bash
echo "starting deploy"
npm run format && npm run lint && npm run test && npm run cy:ci && vc --prod -f && vc -f 
echo "SUCCESFULLY DEPLOYED TO PRODUCTION"
