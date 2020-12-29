#!/bin/bash
echo ""
echo ""
echo "removing .cache, public/ for a scratch compile"
rm -rf .cache public/
echo ""
echo ""
npm run build
echo "starting deploy"
echo ""
echo ""
vc 
