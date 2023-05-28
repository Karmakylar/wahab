// import the aws sdk to use the DynamoDB
// libraries in the app
// update the region to 
// where DynamoDB is hosted
// Set a region to interact with (make sure it's the same as the region of your table)
const AWS = require('aws-sdk');
const express = require('express');
const app = express();

AWS.config.update({
    secretAccessKey: "m199q/WxdP5pSPrHijVIq/ldDouIYJa7gW5+rFkw",
    accessKeyId: "AKIASDNFXQBZSKHWTEVN",
    region: "ap-southeast-2",
});
// port on which the server listens
const port = 3000;

app.get("/rows/all", (req, res) => {
    var params = {
        TableName: tableName
    };

    client.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]);   // you can specify the row what you want to get data

            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// create a new DynamoDB client
// which provides connectivity b/w the app
// and the db instance
const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'Wahab';

// Input object with Table specified
// Since we're using scan() method, no query
// is required for us
var params = {
    TableName: tableName
};

// client.scan() returns all the documents
// in the table. you can also use client.query()
// in case of adding a condition for selection
