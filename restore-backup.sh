#!/bin/bash

# backup database
cd mysql
./import_db.sh
cd ..

# backup static content
docker cp ./nginx/ghost-uploads nginx:/var/www/ghost-uploads
