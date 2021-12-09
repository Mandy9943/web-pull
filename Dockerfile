FROM node:14 AS builder
RUN apt update && apt upgrade -y
RUN apt install ffmpeg libsm6 libxext6  -y
RUN npm install -g npm@latest

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node_modules/.bin/next", "start"]
