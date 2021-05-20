class CoffeeShop {

	constructor(name, menu) {
		this.name = name;
		this.menu = menu;
		this.orders = [];
	};

	addOrder(product) {
		for (let i = 0; i < this.menu.length; i++) {
			const currentProduct = this.menu[i].item.toLowerCase();

			if (currentProduct === product.toLowerCase()) {
				this.orders.push(currentProduct);
				return "Order added!";
			};
		};
		return "This item is currently unavailable!";	
	};

	fullfillOrder() {
		if (this.orders.length) {
			const toBeFullfilled = this.orders.shift();
			return `The ${toBeFullfilled} is ready!`;
		};
		return "All orders have been fulfilled!";
	};

	listOrders() {
		if (this.orders !== []) {
			return this.orders;
		} else {
			return [];
		};
	};

	dueAmount() {
		let sum = 0;

		for (let i = 0; i < this.orders.length; i++) {
			const currentOrder = this.orders[i]; 

			for (let j = 0; j < this.menu.length; j++) {
				const currentMenuItem = this.menu[j].item.toLowerCase();
				if (currentOrder === currentMenuItem) {
					sum += this.menu[j].price;
				};
			};
		};
		return (Math.ceil(sum)).toFixed(2);
	};

	cheapestItem() {
		let cheapestItemPrice = 100;
		let cheapestItem = "";

		for (let i = 0; i < this.menu.length; i++) {
			const currentPrice = this.menu[i].price;
			const currentItem = this.menu[i].item;

			if (currentPrice < cheapestItemPrice) {
				cheapestItemPrice = currentPrice;
				cheapestItem = currentItem;
			};
		};

		return cheapestItem;
	};

	drinksOnly() {
		const drinks = [];

		for (let i = 0; i < this.menu.length; i++) {
			const currentMenuItem = this.menu[i].item.toLowerCase();

			if (this.menu[i].type === "drink") {
				drinks.push(currentMenuItem);
			};
		};
		return drinks;
	};

	foodOnly() {
		const foods = [];

		for (let i = 0; i < this.menu.length; i++) {
			const currentMenuItem = this.menu[i].item.toLowerCase();

			if (this.menu[i].type === "food") {
				foods.push(currentMenuItem);
			};
		};
		return foods;
	}
	

}

const testMenu = [
	{ item: "Espresso",         type: "drink", price: 2.50 },
	{ item: "Macchiato",        type: "drink", price: 3.00 },
	{ item: "Americano",        type: "drink", price: 3.00 },
	{ item: "Flat white",       type: "drink", price: 3.00 },
	{ item: "Muffin",           type: "food",  price: 2.50 },
	{ item: "Stuffin",          type: "food",  price: 51.50 },
	{ item: "Unicorn muffin",   type: "food",  price: 2.50 },
	{ item: "Pegasos muffin",   type: "food",  price: 2.50 },
	{ item: "Toast",            type: "food",  price: 1.50 },
	{ item: "A single potato",  type: "food",  price: 0.50 },
	{ item: "A single bean",    type: "food",  price: 0.05 },
]

const tcs = new CoffeeShop("Tesha's coffee shop", testMenu);

console.log(tcs.addOrder("hot cocoa"));
console.log(tcs.addOrder("iced tea"));
console.log(tcs.addOrder("espresso"));
console.log(tcs.addOrder("americano"));
console.log(tcs.addOrder("toast"));
console.log(tcs.addOrder("Flat white"));
console.log(tcs.addOrder("pegasos muffin"));
console.log(tcs.addOrder("a single potato"));
console.log(tcs.listOrders());
console.log(tcs.dueAmount());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.fullfillOrder());
console.log(tcs.listOrders());
console.log(tcs.dueAmount());
console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());


// Menu factory, inspired by Lars (coded from memory)
const drinks = ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"];
const food = ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"];

const anotherMenu = (array1, array2) => {
	const resultArray = [];
	
	for (const item of array1) {
		const object = {};
		object.item = item;
		object.type = "drink";
		object.price = Math.round(Math.random() * 4) + 0.5;
		resultArray.push(object);
	};
	for (const item of array2) {
		const object = {};
		object.item = item;
		object.type = "food";
		object.price = Math.round(Math.random() * 6) + 2.5;
		resultArray.push(object);
	};

	return resultArray;
};

console.log(anotherMenu(drinks, food));