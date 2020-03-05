
//Connection to the database using mySQL username and password
//Require node package and mysql package
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Welovelinklori.",
  database: "bamazon_DB"
});
//Connected
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

 //Display all produts inside database to sell an item to customer
connection.query("SELECT * FROM products", function (err, res) {
  if (err) throw err;
    console.log(res);
  });  
  
});

start();

// function which prompts the user to enter in the item id and quantity
function start() {
  inquirer.prompt([ 
    {
      name: "ID",
      type: "input",
      message: "What item would you like to by?", 
      filter:Number
    },
  {
    name:"Quantity",
		type:"input",
		message:"How many items do you wish to purchase?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

// //show selected


// //Update mySQL database with reduced inventory
// //Show customer total (query)
//Method query to comparing user and stock quantities 
function purchaseOrder(ID, stockAmt){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(stockAmt <= res[0].stock_quantity){
			var totalCost = res[0].price * stockAmt;
      console.log("IN STOCK!");
      //Total cost
      console.log("Total cost = " + stockAmt + " " +res[0].product_name+"s" + " is " + "$"+ totalCost);
      console.log("THANK YOU FOR YOUR PURSCHASE :)");
			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + stockAmt + "WHERE item_id = " + ID);
		} else{
			console.log("Insufficient quantity!" + res[0].product_name);
		};
		displayProducts();
	});
};


