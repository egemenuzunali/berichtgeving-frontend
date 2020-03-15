FROM node:10
WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install
RUN yarn global add serve

COPY src /app/src
COPY public /app/public

RUN npm run build
EXPOSE 3000
CMD serve -s build