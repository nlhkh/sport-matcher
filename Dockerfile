FROM node:19 AS builder

WORKDIR /stage

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build
RUN npm run postinstall

FROM node:19-alpine

WORKDIR /app
COPY --from=builder /stage/.output /app/

USER daemon

CMD [ "node", "server/index.mjs" ]
