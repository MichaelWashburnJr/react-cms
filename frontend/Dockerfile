FROM node:12

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
RUN rm -rf /usr/src/app/frontend/src

# Installing dependencies
# Build context directory should be one folder above this file
COPY . /usr/src/app
WORKDIR /usr/src/app/frontend
RUN yarn
RUN yarn config set proxy http://nginx

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD ["yarn", "start"]