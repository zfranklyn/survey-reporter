'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');

app.listen(3000, ()=>{
	console.log(chalk.green("Server listening on port 3000"));
})