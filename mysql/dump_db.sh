#!/bin/bash

docker-compose exec mysql mysqldump -u root -p"supersecret" --add-drop-table mysql > database.sql
sed -i.bu "/mysqldump/d" ./database.sql
rm -f ./database.sql.bu
