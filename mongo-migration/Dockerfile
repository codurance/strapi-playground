FROM node:lts-slim
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY migrate-mongo-config.js ./
COPY migrations ./migrations
CMD yarn up

