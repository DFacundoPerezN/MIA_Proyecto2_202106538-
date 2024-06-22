FROM node:20-alpine
COPY . /app
WORKDIR . /app

RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "start"]