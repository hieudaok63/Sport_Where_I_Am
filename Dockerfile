FROM node:10.18.1-alpine

ENV APP_DIR=/usr/src/app
ENV TZ Australia/Sydney
ENV NODE_PATH=./node_modules
ENV PATH=$PATH:${NODE_PATH}/.bin

# obtain latest stable version of node
#RUN npm cache clean -f

# Create API directory
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json ${APP_DIR}

RUN yarn install

COPY . .

# Add an empty .env file (if it doesn't exist)
RUN touch .env

ENV NODE_ENV production

# set a health check
HEALTHCHECK --interval=5s \
  --timeout=5s \
  CMD curl -f http://127.0.0.1:5000 || exit 1

EXPOSE 5000

LABEL version="1.0" \
  description="The Sports Where I Am GraphQL Server"

CMD ["yarn", "start:prod"]
