const product = require("./product");


// create backend services (REST API) using express
const express = require("express");
const cors = require("cors");

server = express();
server.use(cors());

// const bodyParser = require("body-parser");
// server.use(bodyParser.json());
server.use(express.json());

// router = express.Router();

// // add an entry to the router table - parameters - URI -> function
// router.get("/welcome", (request, response) => {
//     response.status(200).send("Welcome");
// })

// server.use(router);
server.use(product.router);

server.listen(3000, () => {
    console.log("server is starting");
});



// product.get_all_products();

// product.get_product_by_id(3); 

// product.create_new_product("iTable",1234);

// product.delete_product_by_id(30);

// product.update_price_by_id(200,2500);

// product.get_all_products();
