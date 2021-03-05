#!/bin/sh

while true; do
curl -X GET "http://192.168.49.2:30000/celsius/0/fahrenheit" -H  "accept: application/json"
echo ""
done

exit 0;
