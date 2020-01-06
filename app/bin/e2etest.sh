export NODE_ENV=test

echo "Starting server."
../../server/bin/build.sh app && node ../../server/dist/app.js & \

timeout 20 \
bash -c 'while [[ "$(curl -s -o /dev/null -w "%{http_code}" localhost:3000/api/ping)" != "200" ]]; do sleep 1; done' \
&& yarn cypress run || echo "Could not talk to server.";

echo "Closing server."
kill -s SIGTERM %1
kill -9 $(lsof -tc node)
