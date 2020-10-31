#!/bin/bash

npm run format
npm run lint 
rm -rf build 
npm run build 
vercel