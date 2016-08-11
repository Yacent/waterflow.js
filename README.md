##Waterflow v0.0.3
a plugin that can achieve the layout of the waterflow

###Principle
judge the height of each column, append the new domElement into the column of the most shortest column

###Usage

####import
```javascript
<script type="text/javascript" src="waterflow.js"></script>
<script type="text/javascript" src="**.js"></script>
```

####HTML Structure
```javascript
/* ========= css start ========= */
* {margin: 0;border: 0;padding: 0;}
.waterflow {position: relative;}
.flow {background: rgba(0,0,0,.8);position: absolute;border: 1px solid #ccc;}
.flow .flowItem {width: 100%;font-size: 50px;color: #fff;text-align: center;}
/* ========= css end ========= */

<div class="waterflow" id="waterflow">
	<div class="flow"><div class="flowItem">1</div></div>
	<div class="flow"><div class="flowItem">2</div></div>
	<div class="flow"><div class="flowItem">3</div></div>
	<div class="flow"><div class="flowItem">4</div></div>
	<div class="flow"><div class="flowItem">5</div></div>
	<div class="flow"><div class="flowItem">6</div></div>
	<div class="flow"><div class="flowItem">7</div></div>
	<div class="flow"><div class="flowItem">8</div></div>
	<div class="flow"><div class="flowItem">9</div></div>
	<div class="flow"><div class="flowItem">10</div></div>
	<div class="flow"><div class="flowItem">11</div></div>
	<div class="flow"><div class="flowItem">12</div></div>
	<div class="flow"><div class="flowItem">13</div></div>
	<div class="flow"><div class="flowItem">14</div></div>
</div>
```

####JS call

	1. Fetch the most outest element that contain the flowitem
	2. Fetch the flowItems of all
	3. set the option
		property:
			parent: the 1
			flowItems: the 2
			column: number | define the column of waterflow
			width: number | define the width of each items
			horizontalMargin: number | define the margin of each item in horizon
			verticalMargin: number | define the margin of each item in vertical

```javascript
var waterFlow = document.getElementById('waterflow'),
	flowItems = waterFlow.getElementsByClassName('flow'),
	option = {
		parent: waterFlow,
		flowItems: flowItems,
		column: 3,
		width: 360,
		horizontalMargin: 15,
		verticalMargin: 15
	};

waterflow.fire(option);
```

####License
MIT

####Hey
~~Achieve compatibility for IE, backwards compatibility and Responsive in the future.~~
