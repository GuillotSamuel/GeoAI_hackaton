FROM node:18-alpine

RUN apk --no-cache update && apk --no-cache upgrade

WORKDIR /app
COPY ./app /app

RUN npm install

EXPOSE 8081

CMD ["npm", "run", "dev"]