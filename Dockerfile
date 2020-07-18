FROM node:8.7.0
WORKDIR /usr/src/app/server
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]