Bamazon

A CLI App

Screenschots, video
  no bugs
  Prompts and responses after selection
  understand purpose and functionality
  What I build & why
  
Created a MySQL database that connects to the node application. This will display all items available for sale, including additional data about the products like price, name ect. It will prompt you to enter the id of the product and how many units you want. The application will then check to see if the store has enough of the product to met the customers request. If not, it will alert you that there is an insufficient quanity. If the product is available the application will update the SQL database to show the remaining quanity and display customer total cost. 

*Saved and Required NPM Packages that installed our node_modules (npm install mysql). This allows Node.js to manipulate the SQL.
Created a mySQL database and created a table called products, columns with paramaters and rows with 10 inserted values.

*![image](https://github.com/forsa9828/bamazon/blob/master/images/Created%20Database%20in%20mysql.PNG)

*Created a connection 

*![image](https://github.com/forsa9828/bamazon/blob/master/images/connected.PNG)

*Connected the database to node application (bamazonCustomer.js) and then ran the appliation to display data

*![image](https://github.com/forsa9828/bamazon/blob/master/images/Query.PNG)

*Used inquierprompt messages asking about the item they want to buy and then how much

*![imgae](https://github.com/forsa9828/bamazon/blob/master/images/prompts.PNG)

*The application then checked invenotry and if there were no values in the the stock quainity then a prompt stats "Insufficient Quanity"
*If there are values in the stock quainity the application will then update the mySQL database and total the cost.

*![image](https://github.com/forsa9828/bamazon/blob/master/images/Total.PNG)
   
