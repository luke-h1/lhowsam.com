#!/bin/bash
echo "starting deploy 🤠"
npm run format && npm run lint && npx jest && vc -f && vc --prod -f 