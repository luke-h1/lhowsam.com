#!/bin/bash
echo "Are you sure your changes aren't going to break production ?"
read -r response
if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]; then
    CONTINUE=true
fi

if ! $CONTINUE; then
    # Check if we're continuing and output a message if not
    echo "Exiting with status code 1"
    exit 1
fi
if ! npm run lint; then
    echo ''
    echo ''
    echo "###########################################" 
    echo "# ❌     ESLINT returned an error.     ❌  #" 
    echo "# ❌ process exited with status code 1 ❌  #" 
    echo "###########################################" 
    exit 1
else
    echo 'eslint returned no errors. Continuing with deployment'
fi
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
    echo 'Unit tests have passed. Deploying to production ✅'
fi 
echo ""
echo ""
echo "removing .cache, public/ for a scratch compile"
rm -rf .cache public/
echo ""
echo ""
echo "starting deploy"
echo ""
echo ""
vc --prod