const name = 'Max';
const userAge = 28;

const user = {
	name,
	age: userAge,
	location: 'Earth',
};

// console.log(user);

//Object destructuring

const product = {
	label: 'Red Notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 4.2,
};

const { label: changedName, stock: changedStockName, rating = 5 } = product;
// console.log(changedName, changedStockName);

const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};

transaction('order', product);
