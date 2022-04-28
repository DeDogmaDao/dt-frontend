#!/bin/bash -e
touch /app/frontend/src/public/robots.txt
echo -e "$ROBOTS_TXT" > /app/frontend/src/public/robots.txt
npm run up