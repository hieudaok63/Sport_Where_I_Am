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

ARG BASE_API
ARG BASE_API_V2
ARG BASE_GQL_URL

ENV NODE_ENV production
ENV BASE_API=$BASE_API
ENV BASE_API_V2=$BASE_API_V2
ENV PORT=5000
ENV TIME_OUT=3000
ENV CITY_ROUTE=/v3i/cities
ENV BASE_GQL_URL=$BASE_GQL_URL

# set a health check
HEALTHCHECK --interval=5s \
  --timeout=5s \
  CMD curl -f http://127.0.0.1:5000 || exit 1

EXPOSE 5000

LABEL version="1.0" \
  description="The Sports Where I Am GraphQL Server"

CMD ["yarn", "start:prod"]
