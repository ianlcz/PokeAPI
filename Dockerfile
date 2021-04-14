FROM node:lts-alpine3.13
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 1996
CMD [ "npm", "start" ]
