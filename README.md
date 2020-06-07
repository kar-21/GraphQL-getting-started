# GraphQL

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/badge/express-v4.17.1-green)](https://www.npmjs.com/package/express) [![npm version](https://img.shields.io/badge/GraphQL-v14.5.5-red)](https://www.npmjs.com/package/graphql) 

Project is to learn GraphQl. Single api which gives what we query for what we need. Go through their website [GraphQL].

Mutation is used for posting and Query is used for getting data from backend

## Start Execution
Fork the repository and install local dependencies by running below command.

```sh
 $ npm install
```

Run the mongoDB locally and run the below command.

```sh
 $ node app.js
```

After execution open the browser and go to this link [//localhost:3000/graphql].
Now you can see the editor window used for mutation and query

### Mutation
Paste the bellow code in left panel for posting data to DB. If collection is not created bu running mutation command, it will create DB with name employeeDataBase and creates collection employee under it.

```sh
mutation {
  employeeAdd(id: 824, name: "Rachel Green", department: "clothing", salary: 87000) {
    id
    name
    department
    salary
  }
}
```

### Query
You can query with the _id created by mongoDB and get required parameters  mentioned in query. Run the below command with the query parameter.

```sh
query {
  employee(_id: "5edcecfe0fdc4f5e0081c89f") {
    id
    name
    department
    salary
  }
}
```
Enjoy GraphQL and Explore More.

[GraphQL]: <https://graphql.org/>
[//localhost:3000/graphql]: <http://localhost:3000/graphql>