FROM node:8.7.0
WORKDIR /usr/src/app/server
RUN npm install
COPY ./server .
EXPOSE 3000
CMD ["npm", "start"]