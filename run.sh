#!/bin/bash -e
touch /app/frontend/src/public/robots.txt
echo "$ROBOTS_TXT" > /app/frontend/src/public/robots.txt
npm run up