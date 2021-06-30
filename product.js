const database = require("./database");

function get_all_products() {
    database.connection.query(
        'select * from customers',
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                storedResult = result;
            }
        }
    )
}

function get_product_by_id(id){
    database.connection.query(`select * from products where id = ${id}`,
    (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            storedResult = result;
        }
    }
    )
}

// function create_new_product(name, price) {
//     database.connection.query(
//         ' * from customers',
//         (error, result) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log("Created successfully");
//             }
//         }
//     )
// }

function delete_product_by_id(id) {
    database.connection.query(
        `delete from products where id = ${id}`,
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Deleted");
            }
        }
    )
}

function update_price_by_id(id, new_price) {
    database.connection.query(
        `update products set market_price = ${new_price} where id =${id}`
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Created successfully");
            }
        }
    )
}

module.exports = {
    get_all_products,
    get_product_by_id,
    update_price_by_id,
    // create_new_product,
    delete_product_by_id,
};