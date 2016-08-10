var waterFlow = document.getElementById('waterflow'),
	flowItems = waterFlow.getElementsByClassName('flow');

var option = {
	parent: waterFlow,
	flowItems: flowItems,
	column: 3,
	width: 360,
	horizontalMargin: 15,
	verticalMargin: 15
};

water(option);