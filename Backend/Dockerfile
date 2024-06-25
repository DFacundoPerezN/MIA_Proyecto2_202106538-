FROM node:20-alpine
COPY . /app
WORKDIR ./app

RUN npm i --only=production 

EXPOSE 3000
CMD ["npm", "start"]