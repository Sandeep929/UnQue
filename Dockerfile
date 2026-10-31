FROM node:24-alpine AS dependencies

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

FROM node:24-alpine AS production

ENV NODE_ENV=production \
    PORT=3000

WORKDIR /app

COPY --from=dependencies --chown=node:node /app/node_modules ./node_modules

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["node", "index.js"]