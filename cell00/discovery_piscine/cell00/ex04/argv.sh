#!/bin/bash

# Check and echo up to 3 arguments
if [ $# -gt 3 ]; then
  echo "Error: Maximum 3 arguments allowed."
  exit 1
fi

echo "$1"
echo "$2"
echo "$3"
