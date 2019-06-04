FROM node:lts-slim
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install
COPY favicon.ico .
COPY api ./api
COPY config ./config
COPY extensions ./extensions
COPY public ./public
EXPOSE 1337
RUN yarn build
CMD yarn start
