

// // // // // // // // // // // // // // // // // // // // // // // // 


var map = new HashMap();


var config = {
	container: "#OrganiseChart-simple"
};

/*

data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';

var mydata = JSON.parse(data);
alert(mydata[0].name);
alert(mydata[0].age);
alert(mydata[1].name);
alert(mydata[1].age);
*/

/*
var heirarchy = "";
var nodes = [];
var info ="";


// To create the nodes of the tree
for (var i = 0; i <= info.length; i++) {
	var temp_node = {
		text: { name: info[i].name}
	};
	nodes.push(temp_node);
}
 

// To connect the nodes
for (var i = 0; i <= info.length; i++) {
	temp_node[] = {
		text: { name: info[i].name}
	};
	nodes.push(temp_node);
}

*/

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
	text: { name: "Thirs child" }
};


var four = {
	parent: second_child,
	text: { name: "Fourth child" }
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
	parent: third,
	text: { name: "Second childdd" }
};

var eight = {
	parent: third,
	text: {name: "Eigth Child"}
};

var test_node = {
	text: {name: "Test node"}
};

test_node = {
	parent: parent_node,
	text: {name: "Test node updatd"}
};

var simple_chart_config = [config, first_child, parent_node , second_child,
 third, four, five, six, seven, eight, test_node
];
