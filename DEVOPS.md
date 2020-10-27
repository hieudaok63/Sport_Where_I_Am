### Intended Audience

This documentation is technical in nature. It is intended for team members looking to understand the CI / CD process of the Sports Where I Am project
The instructions are reproduced in Confluence - https://lerocketlab.atlassian.net/l/c/2UrZVxty

### Set up Google Cloud cli

Start by installing setting up a Google Cloud Account  and Gloud cli.

Ask client for access to their Google Cloud Consel account- https://cloud.google.com/

Project name is swiam . Region is  australia-southeast1 and zone is australia-southeast1-a. 

Install Google Cloud Command Line Tool - gloud cli. Follow instructions here - https://cloud.google.com/sdk/docs#install_the_latest_cloud_tools_version_cloudsdk_current_version

Initialise gloud cli. In terminal run gloud init (further information here - https://cloud.google.com/sdk/docs/initializing . Use project id swiam-220407 

You can run gcloud auth login to make sure that you are authenticated. This will open a browser window asking you to sign into your Google Cloud account. 

Creating and deploying docker container to Kubernetes

This should already be set up but if for any reason you need to create a new kluster this is how you go about it

### Install kubectl

`gcloud components install kubectl`

Set compute zone

`gcloud config set compute/zone australia-southeast1-a`

Create the kubenetes cluster 

`gcloud container clusters create <projectname>-cluster --num-nodes=1` 

e.g. `gcloud container clusters create staging-swiam-cluster --num-nodes=1` 

Verify set up 

`gcloud container clusters get-credentials staging-swiam-cluster`

### Build, tag and push your docker container 

You should have a Dockerfile in your root project folder which looks something like this:

```
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

ARG SWIAM_API
ARG SWIAM_API_V2
ARG SWIAM_API_V3I
ARG SWIAM_API_V3
ARG SWIAM_OPENAPI
ARG BASE_GQL_URL
ARG SWIAM_SHOP_API_KEY
ARG UNIVERSAL_API
ARG SWIAM_UNIVERSAL_API_KEY
ARG UNIVERSAL_USER_EMAIL

ENV NODE_ENV production
ENV SWIAM_API=$SWIAM_API
ENV SWIAM_API_V2=$SWIAM_API_V2
ENV SWIAM_API_V3I=$SWIAM_API_V3I
ENV SWIAM_API_V3=$SWIAM_API_V3
ENV SWIAM_OPENAPI=$SWIAM_OPENAPI
ENV UNIVERSAL_API=$UNIVERSAL_API
ENV SWIAM_UNIVERSAL_API_KEY=$SWIAM_UNIVERSAL_API_KEY
ENV UNIVERSAL_USER_EMAIL=$UNIVERSAL_USER_EMAIL
ENV PORT=5000
ENV TIME_OUT=3000
ENV BASE_GQL_URL=$BASE_GQL_URL
ENV SWIAM_SHOP_API_KEY=$SWIAM_SHOP_API_KEY

# set a health check
HEALTHCHECK --interval=5s \
  --timeout=5s \
  CMD curl -f http://127.0.0.1:5000 || exit 1

EXPOSE 5000

LABEL version="1.0" \
  description="The Sports Where I Am GraphQL Server"

CMD ["yarn", "start:prod"]
```

This will vary obviously from project to project. 

Note the prodect id - swiam-220407

Build the docker image for the project

`docker build -t staging-swiam-gql.`

Tag the docker image: 

`docker tag staging-swiam-gql gcr.io/swiam-220407/staging-swiam-gql:0.1.0`

Push the freshly tagged docker image to Google Cloudgcloud `docker -- push gcr.io/swiam-220407/swiam-gql:0.1.0`

###Create the Kubernetes Manifest

The project repo root folder contains a gcp_setup folder with 2 subfolders for the Kubernetes manifest files (one for staging and one for production:
```
+-- gcp_setup
|   +-- production
|       +-- 01-swiam-cert.yml
|       +-- 02-app-service.yml
|       +-- 03-ingress.yml
|       +-- 04-app-service.yml
|   +-- staging
|       +-- 01-swiam-cert.yml
|       +-- 02-app-service.yml
|       +-- 03-ingress.yml
|       +-- 04-app-service.yml
```

Here are what should be included in each staging manifest file

```
#01-swiam-cert.yml 

apiVersion: networking.gke.io/v1beta2
kind: ManagedCertificate
metadata:
  name: staging-swiam-cert
spec:
  domains:
    - staging-graphql.sportswhereiam.com
```

```
#02-app-service.yml 

apiVersion: v1
kind: Service
metadata:
  name: staging-swiam-gql
spec:
  ports:
  - protocol: TCP
    name: stage-swiam-gql
    port: 5000
    targetPort: 5000
  selector:
    app: staging-swiam-gql
    tier: backend
  type: NodePort
```

```
#03-ingress.yaml

apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: staging-swiam-ingress
  annotations:
    kubernetes.io/ingress.global-static-ip-name: staging-swiam-ip
    networking.gke.io/managed-certificates: staging-swiam-cert
  labels:
    app: staging-swiam-gql
    tier: backend
spec:
  backend:
    serviceName: staging-swiam-gql
    servicePort: 5000
```

```
#04-app-deployment.yml 

apiVersion: apps/v1
kind: Deployment
metadata:
  name: staging-swiam-gql
  labels:
    app: staging-swiam-gql
spec:
  selector:
    matchLabels:
      app: staging-swiam-gql
      tier: backend
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: staging-swiam-gql
        tier: backend
    spec:
      containers:
        - image: gcr.io/swiam-220407/staging-swiam-gql:0.1.0
          name: staging-swiam-gql
          imagePullPolicy: Always
          ports:
            - containerPort: 5000
              name: stage-swiam-gql
          readinessProbe:
            httpGet:
              path: /health
              port: 5000
            initialDelaySeconds: 30
            periodSeconds: 3
            failureThreshold: 2
```

Test the manifest files before deploying to the Kubernetes cluster in Google Cloud

You should run each manifest file in numbered order one by one and validate each one using `--dry-run=true` to make sure that there are no errors first:

```
kubectl apply --validate=true --dry-run=true -f gcp_setup/staging/01-swiam-cert.yaml
kubectl apply --validate=true --dry-run=true -f gcp_setup/staging/02-app-service.yaml
kubectl apply --validate=true --dry-run=true -f gcp_setup/staging/03-ingress.yaml
kubectl apply --validate=true --dry-run=true -f gcp_setup/staging/04-app-deployment.yaml
```

### Create a Static IP and Managed Certificate

Instructions can be found here - https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs

These instructions are for staging. For production, remove staging- from the front of everything.

##### Create the static ip address

`gcloud compute addresses create staging-swiam-ip --global`

##### Validate address and make a note of it

`gcloud compute addresses describe staging-swiam-ip --global`

Output should be something like:

```
address: http://34.96.116.56/
...
```

#### Create the Managed Certificate

From project root in terminal run:

`kubectl apply --validate=true -f gcp_setup/staging/01-swiam-cert.yaml`

Verify the managed certificate. The status should be “provisioning”

`kubectl describe managedcertificate staging-swiam-cert`

Deploy the application and create the cluster:

- Create the Managed Certificate
`kubectl apply --validate=true -f gcp_setup/staging/02-app-service.yaml`

- Create the Ingress 
`kubectl apply --validate=true -f gcp_setup/staging/03-ingress.yaml`

- Create the app workload 
`kubectl apply --validate=true -f gcp_setup/staging/02-app-deployment.yaml`

You should now be able to log into the GCP console, browse to Kubernetes section (left menu) and see the ingress and app service running. 
Under workloads you should see the app deployment. You should be able to browse to your url and see the service running. 
This will only be available once the Managed Certificate is “active” (and client has set the name records against the dns).

##### Create the DNS Domain Name for the service

Detailed instructions may be found here:

https://cloud.google.com/dns/docs/quickstart#create_a_new_record

Browse to https://console.cloud.google.com/net-services/dns/zones?project=swiam-220407&organizationId=541764066198&dnsManagedZonessize=50

Click “Create Zone”. You will need to create a separate zone for each environment but these are the details for staging.

```
Name: staging-swiam-zone
DNS Name: staging-graphql.sportswhereiam.com.au
```

When you get to the production deployment:
```
Name: swiam-zone
DNS Name: graphql.sportswhereiam.com.au
```
Click “Add record set”

- Select Resource Type “A”
- Enter the static IP address you created earlier
- Click Save

Provide the Name servers to the client and ask them to create a DNS record for the url staging-graphq.sportswhereiam.com 

In this view the name servers are:

ns-cloud-e1.googledomains.com
ns-cloud-e2.googledomains.com
ns-cloud-e3.googledomains.com
ns-cloud-e4.googledomains.com

### Set up Circle CI for Continuous Integration / Deployment

From CircleCI console, set up swiam-gql repo and add these environment variables

```
GCLOUD_SERVICE_KEY  xxxxm" }
GOOGLE_COMPUTE_ZONE xxxxast1
GOOGLE_PROJECT_ID xxxx0407
STAGING_GOOGLE_COMPUTE_ZONE xxxxt1-a
SWIAM_SHOP_API_KEY xxxx1463
SWIAM_UNIVERSAL_API_KEY xxxxTAT8
UNIVERSAL_API xxxx/api
UNIVERSAL_USER_EMAIL xxxxm.au
```

See .circleci/config.yaml folder for circle ci config. Contents should be as follows

```
defaults: &defaults
  working_directory: ~/app/
  docker:
    - image: circleci/node:10.16.3

version: 2.1
orbs:
  node: circleci/node@1.0.1
  gke: circleci/gcp-gke@1.0.3
  gcr: circleci/gcp-gcr@0.6.1
jobs:
  build-and-test:
    <<: *defaults
    steps:
      - checkout
      - restore_cache:
          key: node_modules-{{ checksum "package.json" }}
      - run:
          name: Setup common environment variables
          command: |
            echo 'export APP_ENV="staging"' >> $BASH_ENV
            echo 'export SWIAM_API="https://localhost:4000"' >> $BASH_ENV
            echo 'export SWIAM_API_V2="https://localhost:4000"' >> $BASH_ENV
            echo 'export SWIAM_API_V3I="https://localhost:4000"' >> $BASH_ENV
            echo 'export SWIAM_API_V3="https://localhost:4000"' >> $BASH_ENV
            echo 'export SWIAM_OPENAPI="https://localhost:4000"' >> $BASH_ENV
            echo 'export BASE_GQL_URL="http://localhost"'>> $BASH_ENV
            echo 'export UNIVERSAL_API="http://localhost"'>> $BASH_ENV
            echo 'export UNIVERSAL_USER_EMAIL="test@test.com"'>> $BASH_ENV
            echo 'export SWIAM_UNIVERSAL_API_KEY="abcd"'>> $BASH_ENV
            echo 'export PORT="5000"' >> $BASH_ENV
            echo 'export SWIAM_SHOP_API_KEY=$SWIAM_SHOP_API_KEY' >> $BASH_ENV
      - run: NODE_ENV=development yarn
      - run:
          name: Tests
          command: yarn test --maxWorkers 2
      - save_cache:
          key: node_modules-{{ checksum "package.json" }}
          paths:
            - ~/app/node_modules/
  staging-build-push-image-docker:
    description: Build and push staging image to Google Container Registry
    machine: true
    steps:
      - checkout
      - gcr/gcr-auth
      - gcr/build-image:
          extra_build_args: "--build-arg SWIAM_API='https://apidev2.sportswhereiam.com/swiam-api'
             --build-arg SWIAM_API_V2='https://apidev2.sportswhereiam.com/swiam-api/v2'
             --build-arg SWIAM_API_V3I='https://apidev2.sportswhereiam.com/swiam-api/v3i'
             --build-arg SWIAM_API_V3='https://apidev2.sportswhereiam.com/swiam-api/v3'
            --build-arg SWIAM_OPENAPI='https://apidev2.sportswhereiam.com/openapi'
            --build-arg SWIAM_SHOP_API_KEY=$SWIAM_SHOP_API_KEY
            --build-arg BASE_GQL_URL='http://localhost'
            --build-arg UNIVERSAL_API='https://www.universal-tutorial.com/api'
            --build-arg UNIVERSAL_USER_EMAIL=$UNIVERSAL_USER_EMAIL
            --build-arg SWIAM_UNIVERSAL_API_KEY=$SWIAM_UNIVERSAL_API_KEY"
          image: staging-swiam-gql
          tag: $CIRCLE_SHA1 #Change version number e.g to 'v3' when updating application
      - gcr/push-image:
          image: staging-swiam-gql
          tag: $CIRCLE_SHA1 #Change version number e.g to 'v3' when updating application

  production-build-push-image-docker:
    description: Build and push staging image to Google Container Registry
    machine: true
    steps:
      - checkout
      - gcr/gcr-auth
      - gcr/build-image:
          extra_build_args: "--build-arg SWIAM_API='https://api.sportswhereiam.com/swiam-api'
               --build-arg SWIAM_API_V2='https://api.sportswhereiam.com/swiam-api/v2'
               --build-arg SWIAM_API_V3I='https://api.sportswhereiam.com/swiam-api/v3i'
               --build-arg SWIAM_API_V3='https://api.sportswhereiam.com/swiam-api/v3'
              --build-arg SWIAM_OPENAPI='https://api.sportswhereiam.com/openapi'
              --build-arg SWIAM_SHOP_API_KEY=$SWIAM_SHOP_API_KEY
              --build-arg BASE_GQL_URL='http://localhost'
              --build-arg UNIVERSAL_API='https://www.universal-tutorial.com/api'
              --build-arg UNIVERSAL_USER_EMAIL=$UNIVERSAL_USER_EMAIL
              --build-arg SWIAM_UNIVERSAL_API_KEY=$SWIAM_UNIVERSAL_API_KEY"
          image: swiam-gql
          tag: $CIRCLE_SHA1 #Change version number e.g to 'v3' when updating application
      - gcr/push-image:
          image: swiam-gql
          tag: $CIRCLE_SHA1 #Change version number e.g to 'v3' when updating application

  staging-deploy:
    description: Deploy Staging application to Google Kubernetes Engine
    machine: true
    steps:
      - gke/install
      - gke/update-kubeconfig-with-credentials:
          cluster: staging-swiam-cluster
          google-compute-zone: STAGING_GOOGLE_COMPUTE_ZONE
          perform-login: true
      - gke/rollout-image:
          cluster: staging-swiam-cluster
          deployment: staging-swiam-gql
          container: staging-swiam-gql
          image: gcr.io/swiam-220407/staging-swiam-gql # change version when updating
          tag: $CIRCLE_SHA1

  production-deploy:
    description: Deploy Production application to Google Kubernetes Engine
    machine: true
    steps:
      - gke/install
      - gke/update-kubeconfig-with-credentials:
          cluster: swiam-cluster
          google-compute-zone: GOOGLE_COMPUTE_ZONE
          perform-login: true
      - gke/rollout-image:
          cluster: swiam-cluster
          deployment: swiam-gql
          container: swiam-gql
          image: gcr.io/swiam-220407/swiam-gql # change version when updating
          tag: $CIRCLE_SHA1

workflows:
  build_update_deploy:
    jobs:
      - build-and-test
      - staging-build-push-image-docker:
          requires:
            - build-and-test
          filters:
            branches:
              only:
                - staging
      - staging-deploy:
          requires:
            - staging-build-push-image-docker
      - production-build-push-image-docker:
          requires:
            - build-and-test
          filters:
            branches:
              only:
                - master
      - production-deploy:
          requires:
            - production-build-push-image-docker
```

Note that some envs are passed into the docker containers as args at build time. Others which need to be secure (such as api keys) are set in Circle CI. See the Dockerfile above to see how they are used in there. There is probably a more elegant way to set the the non-secure envs but this works for now.

You will see that merging this environment into staging branch will kick off a staging build. Merging into production branch will kick off a production build.
