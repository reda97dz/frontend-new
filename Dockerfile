#base image
FROM node:16.13.2 as build-stage

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

COPY ./package.json .

# install and cache app dependencies
RUN yarn

COPY . .

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
RUN yarn build

RUN yarn run server

# stage 2

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]