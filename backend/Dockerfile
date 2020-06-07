FROM ghost:3.18
RUN apt-get update -y
RUN apt-get install -y default-mysql-client
COPY ./wait-for-db.sh /usr/local/bin/wait-for-db.sh
