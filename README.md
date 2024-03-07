# SIMPLE CRUD EXPRESS BACKEND

### Generate a package.json  
* npm init -y

### Execute the 'index' file  
* node index.js

### In 'scripts' from package.json file include:  
* "server": "node index.js",

### The above allows the command to be executed:  
* "npm run server" for run the application.

### To install express:  
* npm i express  

### Write the following in the 'index' file:
const express = require('express');  
const app = express();  
app.listen(3000, () => {  
    console.log('Server is running on port 3000');  
});  

### Create '.gitignore' file and write down:  
* node_modules

