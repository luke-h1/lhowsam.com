#!/bin/bash
npm run build
npm run format
npm run lint 
npm run tsc
npm run test 
npm run cy:ci 
vc -f && vc --prod -f 
echo "DEPLOYED TO PRODUCTION ✅"