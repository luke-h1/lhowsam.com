#!/bin/bash
echo ""
echo ""
echo ""
if ! npm run test; then 
    echo ''
    echo ''
    echo "###########################################" 
    echo "# ❌     Unit tests failed             ❌  #" 
    echo "# ❌ process exited with status code 1 ❌  #" 
    echo "###########################################" 
    exit 1 
else 
    echo ""
    echo ""
    echo 'Unit tests have passed. Continuing with deployment'
fi 
echo "removing .cache, public/ for a scratch compile"
rm -rf .cache public/
echo ""
echo ""
echo "✨ starting deploy to dev ✨"
npm run build
echo ""
echo ""
vc 
