#!/usr/bin/env node

const http = require("http");
const list = require("./3-read_file_async.js");

const port = 1245;

const app = http.createServer((req, res) => {
    const {method, url} = req;
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 200;
    if (url == "/") {
        res.end("Hello Holberton School!");
    } else if (url == "/students") {
        console.log("This is the list of our students");
        list("database.csv");
    }
});
