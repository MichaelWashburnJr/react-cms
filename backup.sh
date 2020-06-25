#!/bin/bash

# backup database
cd mysql
./dump_db.sh
cd ..

# backup static content
docker cp nginx:/var/www/ghost-uploads ./nginx/ghost-uploads
