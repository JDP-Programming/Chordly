inlets = 2;
outlets = 4;

var changedKey = 0; //Initial value
var incomingList = [];


function list() { //Input original RNs
	if(inlet === 1) {
		incomingList = arrayfromargs(arguments);
	}
}		
		
function bang() { //Bang
	if(inlet === 0) {			
		if (incomingList.length > 0) {
			changedKey = Math.floor(Math.random() * 13) - 4 

			var newList = incomingList.map(function(num) {
				return num + changedKey;
		});
		
			outlet(0, newList); //output transposed list
			outlet(1, changedKey); // send the changedKey
			outlet(2, newList[0]); //First Bass Note
			outlet(3, newList[3]); //First Soprano Note
		}
	}
}