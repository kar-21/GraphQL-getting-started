const express = require('express');
const graphHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema');
const app = express();

mongoose.connect("mongodb://localhost/employeeDataBase", ()=>console.log("connected to DB"));

app.use('/graphql', graphHTTP({
    schema, graphiql: true
}));

app.listen(3000, () => console.log('Server is Up'));