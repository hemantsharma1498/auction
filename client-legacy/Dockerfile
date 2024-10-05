FROM node:18-alpine

WORKDIR /app

COPY public .
COPY src .
COPY package.json .

# Setting env var for REACT_APP_AUCTION_HOST
ARG REACT_APP_AUCTION_HOST
ENV REACT_APP_AUCTION_HOST=$REACT_APP_AUCTION_HOST

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
