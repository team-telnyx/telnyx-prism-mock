FROM node:14

RUN yarn global add @stoplight/prism-cli
WORKDIR /proxy
COPY ./proxy .
COPY ./docker-script.sh .
RUN chmod 777 docker-script.sh
RUN yarn install
CMD ["./docker-script.sh"]
