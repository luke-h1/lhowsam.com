echo "testing if venv is present"

if ! ./venv/bin/activate 
  pip3 install locust
  echo ""
  echo ""
  echo "done"
exit 0 