#!/bin/bash

docker-compose exec mysql mysql -u root -p"supersecret" -e "DROP database mysql;CREATE database mysql;"
docker-compose exec -T mysql mysql -u root -p"supersecret" -D mysql < ./database.sql
