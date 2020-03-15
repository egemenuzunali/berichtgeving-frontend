FROM node:10
WORKDIR /app
RUN npm install -g yarn
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN npm install
RUN npm install -g serve

COPY src /app/src
COPY public /app/public

RUN npm run build
EXPOSE 5000
CMD serve -s build