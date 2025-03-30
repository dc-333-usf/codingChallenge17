//Task 1: Create a Customer Class.
class Customer { //create a new class "Customer"
    constructor(name, email) { //when creating a new instance of this class, a name and an email should be added as arguments
        this.name = name; //set the input of name to this.name
        this.email = email; //set the input of email to this.email
        this.purchaseHistory = []; //create an array for purchase history
    }

    addPurchase(amount) { //add a method that takes an amount
        if (typeof amount === "number") { //check to make sure the amount is a number
            return this.purchaseHistory.push(amount) //if it is, push it to the purchase history array
        } else { //if it's not
            return console.log("Please enter a number.") //return an error
        }
    }

    getTotalSpent() { //create a method to get the total amount spent
        return console.log(this.purchaseHistory.reduce((total, n) => total + n, 0)); //use the .reduce method to add up all instances in the purchase history array
        }
}

const customer1 = new Customer("Jacky", "JackyJ@gmail.com");
customer1.addPurchase(20);
customer1.addPurchase(30);
customer1.addPurchase("hi!");
customer1.getTotalSpent(); //test data


//Task 2: Create a SalesRep Class.
class SalesRep { //create a class, "SalesRep"
    constructor(name) { //when adding a new instance, take name as an argument
        this.name = name; //set this.name equal to the input for name
        this.clients = []; //create an empty array for the clients
    }

    addclient(customer) { //add a method to create a client in the array
        if (customer instanceof Customer) { //if the input customer is an instance of the Customer class
            this.clients.push(customer); //add them to the array
        } else { //if they aren't
            console.log("Please enter a valid customer."); //log an error
            return; //stop any further execution
        }
    }

    getClientTotal(name) { //add a method to get the total spent by a client in the array
        const clientIndex = this.clients.findIndex(cl => cl.name === name); //find the index of the specified client in the array
        if (clientIndex !== -1) { //if the client is found in the array
            return this.clients[clientIndex].getTotalSpent(); //return the client's total spent using their index
        } else { //if they aren't found
            console.log("Client not found"); //log an error
            return; //stop any further execution
        }
    }
}

const salesRep1 = new SalesRep("Jake");
salesRep1.addclient(customer1);
salesRep1.getClientTotal("Jacky"); //test data