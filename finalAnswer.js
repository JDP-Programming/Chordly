inlets = 8;
outlets = 1;

var values = [];
for (var i = 0; i < 8; i++) {
	values[i] = -1;
}

function msg_int(val) {
	values[inlet] = val;
	
	var allCorrect = true;
	for (var i = 0; i < values.length; i++) {
		if (values[i] !== 0) {
			allCorrect = false;
			break;
		}
	}
		
		if (allCorrect) {
			outlet(0, "bang");
		}
	}