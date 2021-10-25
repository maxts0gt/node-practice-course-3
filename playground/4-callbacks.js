// setTimeout(() => {
// 	console.log('Two seconds are up');
// }, 2000);

// const names = ['Andrew', 'Jen', 'Jess'];

// const shortNames = names.filter((name) => name.length <= 4);

// console.log(shortNames);

// const geoCode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			lattitude: 0,
// 			longtitude: 0,
// 		};
// 		callback(data);
// 	}, 2000);
// };

// geoCode('NY', (data) => {
// 	console.log(data);
// });

const add = (num1, num2, callback) => {
	setTimeout(() => {
		callback(num1 + num2);
	}, 2);
};

add(1, 4, (sum) => {
	console.log(sum);
});
