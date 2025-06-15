FROM node:22-alpine

ENV BACKEND_URL=http://0.0.0.0:5000

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT [ "npm" ]

CMD [ "start" ]