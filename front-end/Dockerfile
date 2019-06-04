FROM node:lts-slim
WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY src ./src
EXPOSE 8080
CMD yarn start
