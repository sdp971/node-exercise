const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.SERVER_PORT;



app.listen(port, () => {
  console.log(`My name is ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);
})