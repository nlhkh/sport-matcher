FROM node:18 AS builder

WORKDIR /stage

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .
RUN yarn build
RUN yarn postinstall

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /stage/.output /app/

USER daemon

CMD [ "node", "server/index.mjs" ]
