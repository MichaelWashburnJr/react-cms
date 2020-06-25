# react-cms
A blog/shopify store proof of concept using Strapi Headless CMS, Next.js, React, GraphQL, and Apollo

## Development

To run this project locally, it's recommended that you use docker-compose to run all the services on your local machine. But I'm not your Daddy, so do whatever you want.

### Using Docker-Compose

1. [Install Docker](https://docs.docker.com/get-docker/)
2. Run `docker-compose -p "local-platform" up -d --force-recreate`
3. Edit files in the `./frontend` folder and they'll be automatically synced into the `frontend` docker container. The default `docker-compose.yaml` file sets up a volume bound to the `./frontend` folder so any file gets transferred to the container. 

### Import Test Database
I've exported my local database to `mysql/database.sql`. If you've made changes to the databse that you would like persisted in the repo, run `cd mysql && ./dump_db;`. 

If you would like to load the default databse (I recommend this on your first time running), then run `cd mysql && ./import_db`.

## Docker Tips & Tricks for Local Dev

### Force rebuild a service
This is useful if you're ever making changes but you feel like you're not seeing them reflected in your container.
```
docker-compose build --no-cache <service_name>
```
Next time this service is used in `docker-compose up` it will be up-to-date.

### Build all servers and start them without the daemon
The benefit of doing this is that you can see all the logs from startup right in front of you and any errors that are occuring.
```
docker-compose -p "local-platform" up
```
Site note: naming this "local-platform" makes it easier to find in other docker commands.

### Stop all running containers
```
docker stop $(docker ps -aq)
```

### Remove all stopped containers
```
docker rm $(docker ps -aq)
```

### Remove all images
```
docker rmi $(docker images -q)
```

## Managing databases and files

I've added some simple backup and restore scripts to the top level of this repo. I would recommend getting an instance of the site in a state you're happy with and then running `./backup.sh` to store it's database and images. 

If you then want to replicate that site, it's possible to do so by running `docker-compose up -d` on your server and then `./restore-backup.sh`.

Your docker containers must be running already for this to work.