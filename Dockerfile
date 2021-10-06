FROM node:latest
WORKDIR /app

COPY package.json .
COPY . ./
RUN npm install

ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development" ]; \
#   then npm install; \
#   else npm install --only=production; \
#   fi
RUN npm install

EXPOSE 8000
CMD ["node", "server.js"]