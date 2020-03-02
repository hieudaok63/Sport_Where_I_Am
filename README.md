# gql-swiam

## Description

GraphQL Service for the Sports Where I Am Application.

## How it works

- If running in 'development' using `yarn start:dev` then the application will interface with a Mock API 
- Mock API was created using [faker](https://github.com/marak/Faker.js/) and is served up 
with [json-server](https://www.npmjs.com/package/json-server)). 
By default the mock data (json server) runs on http://localhost:4000.
- If mock api data is created each time the app runs in development mode - 
see  `src/services/mock-api/mock-data/createdb.js`

## Setup

[Install Node.js `Node.js`](https://nodejs.org/en/) (make sure the version on your node is v10+ but ideally 12)

- If you have multiple versions of node installed and would like to set a particular version as default `eg nvm alias default 12`

[Install nvm `NVM`] (https://github.com/nvm-sh/nvm)

[Install and use `yarn`](https://yarnpkg.com/en/docs/install) instead of `npm`.

###Get up and running 

Easiest way is to just hit the "Use this Template" button and follow the prompts to set up a new repo.

![alt_text](https://help.github.com/assets/images/help/repository/use-this-template-button.png "Use as template")

Naming convention for your new project should be `gql-{projectname}` where {projectname} is you guessed it, your project name eg gql-webjet

then follow instructions in your newly created github repo home page.

```
git clone git@github.com:TheRocketLab/gql-{projectname} 
cd gql-{projectname} 
```

```cp .env.example .env
yarn
yarn start:dev
```

## View the GraphQLiq sandbox 

- Browse to [http://localhost:5000/gql](http://localhost:5000/gql)
- Click on "Docs" button in right hand side bar to view available queries
- Run a query in the main (left) panel e.g. to retrieve a user by id
```
query {
  userById(id: 0) {
    lastName
    department {
        id
        departmentName
    } 
  }
}

-- or --

query {
  allDepartments {
    id
    departmentName
  }
}

```

- [Lean more GraphQL](https://graphql.org/learn/)

## Adding a GraphQL Query

1. Define a GraphQL type (e.g. user or department) in the `src/schema/types` folder
2. Define a GraphQL query in the `src/schema/queries` folder
3. Define a service function to GET / PUT / POST (more an PUT and POST later) in the `src/services/` folder (e.g. `getUserById()` in the `user-server`).
4. Add any mock data generator to `/services/mock-data/createdb.js`. The mock data should be exactly the same as the data which is usually returned from the API 
which you are accessing in step 3. Faker is used to generate this data but it is acceptable to create `.json` files, import these from within createdb.js and then
write them to the json-server. 
5. in `/services/mock-api/routes.json` map actual api path routes to the json server route.
6. Create tests
7. Make sure it works before making a PR - open up a graphql client or postman and run the query. To test against a staging environment which interfaces with secure apis, you may need to pass an auth token in the header 
`Authorization Bearer <token>` 

### Why no mutations 

Mutations aren't actually necessary in a graphql aggregator. If a client wanted to create or update data, the request would 
still be made in the form of a graphql query. The query would accept variables representing the data that is being submitted (most likely by a form). Your service function (as per step 3 above) 
would then make an http POST or PUT request as the case may be to persist that data against the relevant API.

## Testing

```
yarn test
```

See `tests` folder. Note that we are only testing that the queries that we create. We assume that any APIs which we are accessing have their own tests in place. 
Hence we mock the responses that we receive.

## Run with docker

- To be completed 

## Deployment 

- To be completed 

## Questions

![alt text](https://i.kym-cdn.com/photos/images/newsfeed/001/382/037/2fe.jpg "New phone who dis?" )

Only jokes ٩(^‿^)۶ please email eugene.astuto@rocketlab.com.au


