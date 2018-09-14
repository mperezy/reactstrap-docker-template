FROM node:9.4.0-alpine
# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV NODE_PATH=/node_modules
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN \
    npm install --silent && \
    npm install react-scripts@1.1.1 -g --silent && \
    npm install bootstrap --save && npm install --save reactstrap react react-dom
  # && \
# start app
CMD ["npm", "start"]