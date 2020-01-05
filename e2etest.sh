echo "Starting server."
yarn start app & \
timeout 20 \
bash -c 'while [[ "$(curl -s -o /dev/null -w "%{http_code}" localhost:3000/api/ping)" != "200" ]]; do sleep 1; done' \
&& yarn cypress run || echo "Could not talk to server.";

echo "Closing server."
kill -s SIGTERM %1
kill -9 $(lsof -tc node)
