#!/bin/bash
echo "Are you sure your changes aren't going to break production ?"
read -r response
if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]; then
    CONTINUE=true
fi

if ! $CONTINUE; then
    # Check if we're continuing and output a message if not
    echo "Not breaking prod"
    exit 33
fi
npm run format
npm run lint 
rm -rf build/ 
npm run build 
vercel --prod 