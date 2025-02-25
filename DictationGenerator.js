

function generateChordList() {
//This defines the function
	var chordList = [];
	//Creates an empty array to hold the random numbers
	
	chordList.push(0);
	//Makes the first number always 0
	
	for (var i = 1; i < 6; i++) {
	//Standard for loop, generates 6 numbers 
		var chordNumber;
		
		do {
			chordNumber = Math.floor(Math.random() * 3);
			
			if (i > 0 && chordNumber === 1 && chordList[i - 1] === 2) {
				continue;
			}
			// If the number generated is 1, and the one before it is 2, try a new iteration
			
			if (i > 1 && chordNumber === chordList[i - 1] && chordNumber === chordList[i - 2]) {
				continue;
			}
				if ( i === 5 && chordList[4] === 2 && chordNumber === 2) {
				continue;
			}
				// Generates a random float between 0 to 1, multiplying it by 3, and then rounding down.
				// When the list is two or more, the code checks to see if the new number equals the last and second-to-last number generated. 
				// If the three numbers are equal, a different number is generated.
				// Ensures that 5 and 6 are both not 2. 
			break;
			
		} while (true); // Both conditions are checked
	

		chordList.push(chordNumber);
		
	}
		
	var randomNum = Math.random();
	var finalCadence;
	
	if (randomNum < 0.7) {
		finalCadence = [2, 0]; //70%
	} else if (randomNum < 0.9) {
		finalCadence = [1,0]; //20%
	} else {
		finalCadence = [1, 2]; //10%
	}	
		
	if (finalCadence[0] === 1 && chordList[5] === 2) {
		finalCadence = [2,0];
	}
		//Still ensures 1 does not follow 2 for the 6th and 7th chords
		
	if (chordList[4] === 2 && chordList[5] === 2) {
    finalCadence = [1, 0];  // Avoids Authentic cadence if chords 5 and 6 are both a dominant chord.
	}

		
	if (finalCadence[0] === chordList[5] && finalCadence[0] === chordList[4]) {
		finalCadence = [2,0];
	}
		//Ensures the same number is not three times in a row.
		

	
	chordList = chordList.concat(finalCadence);
	//concat - combines the two arrays
	
	if (chordList[chordList.length - 1] === chordList[chordList.length -2] && 
		chordList[chordList.length - 1] === chordList[chordList.length - 3]) {
		chordList = chordList.slice(0, -2);
		chordList = chordList.concat([2 , 0]);
		//If Chords 5, 6, and 7 are the same, remove the cadence and choose a new one.
	}
		
	var chordOptions = {
		0: ["I", "I6", "iii", "vi"],
		1: ["IV", "IV6", "ii", "ii6", "ii6/5"],
		2: ["V", "V7", "vii06", "V6/5", "V4/3", "V4/2", "viiø7", "viiø6/5", "viiø4/3", "viiø4/2"]
	};
	
	var romanNumeralList = [];
	
	for (var i = 0; i < chordList.length; i++) {
		var num = chordList[i];
		var options = chordOptions[num];
		var chosenRoman;
		
		if (i === 0) {
			chosenRoman = "I"; // First chord is always root position tonic
			
		} else if (i === chordList.length -1) { 
			
			if (num === 0 ) {
			 	chosenRoman = Math.random() < 0.5 ? "I" : "I6"; // 50/50 of chord
			
			} else if (num === 2) {
				chosenRoman = "V"; 	//Final chord logic
				
			} else {
				chosenRoman = options[Math.floor(Math.random() * options.length)];
			}
		} else if (i === 5) {
			if (num === 0) {
				var filteredOptions = [];
				for (var j = 0; j < options.length; j++) {
					if (options[j] !== "Cad6/4") {
						filteredOptions.push(options[j]);
					}
				}
				chosenRoman = Math.random() < 0.3 ? "Cad6/4" : filteredOptions[Math.floor(Math.random() * filteredOptions.length)];
			} else {
				chosenRoman = options[Math.floor(Math.random() * options.length)];
				// Makes Cad6/4 appear only at the 6th chord
			}
		} else {
			if (i === chordList.length - 2 && finalCadence [0] === 1) {
				chosenRoman = "IV"; //Ensures Plagal if penultimate is 1
				
			} else if (i === chordList.length - 2 && finalCadence[0] === 2) {
				var dominantChords = ["V", "V7", "V6", "V6/5", "V6/4", "V4/3", "V4/2"];
				
				do {
					
					chosenRoman = dominantChords[Math.floor(Math.random() * dominantChords.length)];
				} while (chosenRoman === romanNumeralList [i - 1]);
		} else {		
			do {
				chosenRoman = options[Math.floor(Math.random() * options.length)];
			} while (chosenRoman === romanNumeralList [i - 1]); //Ensures the same chord is twice in a row.
		}
	}	
	// Looking at the second to last chord to ensure a proper cadence
		romanNumeralList.push(chosenRoman);
	// Assigns 0, 1 and 2 to chords through map(), teturn line is choosing the specific chord.
	}
	
	if (romanNumeralList[5] == "Cad6/4") {
		var seventhChord = ["V", "V7", "V4/2"][Math.floor(Math.random() * 3)];
		//7th chord is V, V7, or V4/2 if Cad6/4 is chosen
		var eighthChord;
		if (seventhChord === "V" || seventhChord === "V7") {
			eighthChord = Math.random() < 0.5 ? "I" : "I6";
		} else if (seventhChord === "V4/2") {
			eighthChord = "I6";
		}
		
		romanNumeralList[6] = seventhChord;
		romanNumeralList[7] = eighthChord;
	}
	
	return romanNumeralList;

}


//Activate code with a button
function bang () {
	var romanNumeralList = generateChordList(); // gets the list
	outlet (0, romanNumeralList); // Sends list
}