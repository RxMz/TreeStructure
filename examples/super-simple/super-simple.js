

// // // // // // // // // // // // // // // // // // // // // // // // 

var config = {
	container: "#OrganiseChart-simple"
};

var parent_node = {
	text: { name: "Parent node" }
};

var first_child = {
	parent: parent_node,
	text: { name: "First child" }
};

var second_child = {
	parent: parent_node,
	text: { name: "Second child" }
};

var third = {
	parent: second_child,
	text: { name: "Second child" }
};


var four = {
	parent: second_child,
	text: { name: "Second child" }
};


var five = {
	parent: four,
	text: { name: "Second child" }
};

var six = {
	parent: five,
	text: { name: "Second child" }
};

var seven = {
	parent: six,
	text: { name: "Second child" }
};


var simple_chart_config = [
	config, parent_node,
		first_child, second_child, third, four, five, six, seven
];
