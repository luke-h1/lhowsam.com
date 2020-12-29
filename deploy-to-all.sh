#!/bin/bash
echo ""
echo ""
echo "deploying to dev"
echo ""
echo ""
echo "removing .cache, public/ for a scratch compile"
rm -rf .cache public/
echo ""
echo ""
echo "starting deploy"
npm run build
echo ""
echo ""
vc 
echo " "
echo ""
echo "deploying to prod"
vc --prod
