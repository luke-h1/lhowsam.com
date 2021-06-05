#!/bin/bash
npm run tsc 
npm run build 
npm run format 
npm run lint 
npm run cy:ci
echo "Checks passed ✅ continuing with deployment"
