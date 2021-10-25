// const square = function (x) {
// 	return x * x;
// };

const square = (x) => x * x;

console.log(square(3));

const currentEvent = {
	name: 'Birthday Party',
	guestList: ['Andrew', 'Mike', 'Bob'],
	printGuestList() {
		console.log('Guest list for ' + this.name);

		this.guestList.forEach(function (guest) {
			console.log(guest + 'is attending ' + this.name);
		});
	},
};

currentEvent.printGuestList();
