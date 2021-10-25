const tasks = {
	tasks: [
		{
			text: 'Grocery Shopping',
			completed: true,
		},
		{
			text: 'Clean Yard',
			completed: false,
		},
		{
			text: 'Film Course',
			completed: false,
		},
	],
	getTaskTodo() {
		const uncompletedTasks = this.tasks.filter((task) => task.completed === false);

		uncompletedTasks.forEach((task) => console.log(task.text));
	},
};
console.log(tasks.tasks);
tasks.getTaskTodo();
