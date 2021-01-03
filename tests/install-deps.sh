#!/bin/bash
echo "Installing testing deps"
python3 -m venv ./venv
brew install pipenv
source ./venv/bin/activate
pipenv install locust
echo ""
echo ""
echo "done"
exit 0 
