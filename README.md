# react-cms
A blog/shopify store proof of concept using Strapi Headless CMS, Next.js, React, GraphQL, and Apollo

## Development

To run this project locally, it's recommended that you use docker-compose to run all the services on your local machine. But I'm not your Daddy, so do whatever you want.

### Using Docker-Compose

1. [Install Docker](https://docs.docker.com/get-docker/)
2. Run `docker-compose -p "local-platform" up -d --force-recreate`
3. Edit files in the `./frontend` folder and they'll be automatically synced into the `frontend` docker container. The default `docker-compose.yaml` file sets up a volume bound to the `./frontend` folder so any file gets transferred to the container. 

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