class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    addPurchase(amount) {
        if (typeof amount === "number") {
            return this.purchaseHistory.push(amount)
        } else {
            return console.log("Please enter a number.")
        }
    }

    getTotalSpent() {
        return console.log(this.purchaseHistory.reduce((total, n) => total + n, 0));
        }
}