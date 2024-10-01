#Node Js
<details>
  <summary> Create Node App  </summary>
  
  ```console
npm init
npm i express
npm run express-server
```

</details>

# Basic Setup
package.json file
```js
{
  "name": "day33_node_1",
  "version": "1.0.0",
  "description": "Node project for Day 33",
  "main": "index.js",
  "type" : "module", //Add this line
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "express-server" : "node --watch express.js" //Add this line
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  }
}
```

Simple express server

```js
//Express.js File
const port = 8000;

import express from "express"
import dotenv from "dotenv";

const server  = express()
dotenv.config();

server.use(express.json()); //To handle JSON data. *Important*

server.get("/", (req,res)=>{
    let {body} = req;

    res.send({message : "Hi"})
    // res.send("Hi")

    console.log(body)
})

server.listen(port,()=>{
    console.log(Date().toString(), "Server running on port:", port);
});
```
