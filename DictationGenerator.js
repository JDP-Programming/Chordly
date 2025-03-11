
outlets = 2;

	//	0: ["I", "I6", "iii", "vi"],
	//	1: ["IV", "IV6", "ii", "ii6", "ii6/5"],
	//	2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "viiø7", "viiø6/5", "viiø4/3", "viiø4/2"]

var chordVoicings = { //Low bass, low harm OR high bass, high harm OR low bass, high harm (MIDI 41-84) (Bass MIDI 41-60), "Tenor" note can be close depending on the bass note
	
	"I": [
		[48, 55, 60, 64],
		[48, 60, 64, 67],
		[48, 64, 67, 72],
		[48, 67, 72, 76],
		[60, 60, 64, 67],
		[60, 64, 67, 72],
		[60, 67, 72, 76],
		[60, 72, 76, 79],
		[60, 76, 79, 84],
		[48, 72, 76, 79],
		[48, 76, 79, 84]
	],
	
	"I6": [
		[40, 48, 52, 55],
		[40, 52, 55, 60],
		[40, 55, 60, 64],
		[40, 60, 64, 67],
		[40, 64, 67, 72],
		[40, 67, 72, 76],
		[40, 72, 76, 84],
		[52, 55, 60, 64],
		[52, 60, 64, 67],
		[52, 64, 67, 72],
		[52, 67, 72, 76],
		[52, 72, 76, 84],
		[64, 72, 76, 84]
	],
	
	"Cad6/4" : [
		[55, 60, 64, 67],
		[55, 64, 67, 72],
		[55, 67, 72, 76],
		[55, 60, 64, 67],
		[55, 64, 67, 72],
		[55, 66, 72, 76],
		[55, 72, 76, 79],
		[55, 76, 79, 84],
		[55, 72, 76, 79],
		[55, 76, 79, 84],
	],
		
	"iii": [
		[40, 47, 52, 55],
		[40, 52, 55, 59],
		[40, 55, 59, 64],
		[40, 59, 64, 67],
		[40, 64, 67, 71],
		[40, 67, 71, 76],
		[40, 71, 76, 84],
		[52, 59, 64, 67],
		[52, 64, 67, 71],
		[52, 67, 71, 76],
		[52, 71, 76, 79],
		[52, 76, 79, 83],
		[64, 64, 67, 71],
		[64, 67, 71, 76],
		[64, 71, 76, 79],
		[64, 76, 79, 83]
	],
		
	"vi": [
		[45, 52, 57, 60],
		[45, 57, 60, 64],
		[45, 60, 64, 69],
		[45, 64, 69, 72],
		[57, 57, 60, 64],
		[57, 60, 64, 69],
		[57, 64, 69, 72],
		[57, 69, 72, 76],
		[57, 72, 76, 81],
		[57, 76, 81, 84],
		[45, 69, 72, 76],
		[45, 72, 76, 81],
		[45, 76, 81, 84]
	],
	
	"IV": [
		[53, 60, 65, 69],
		[53, 65, 69, 72],
		[53, 69, 72, 77],
		[53, 72, 77, 81],
		[53, 77, 81, 84],
		[41, 65, 69, 72],
		[41, 69, 72, 77],
		[41, 72, 77, 81],
		[41, 77, 81, 84]
	],	
	
	"IV6": [
		[45, 53, 57, 60],
		[45, 57, 60, 65],
		[45, 60, 65, 69],
		[45, 65, 69, 72],
		[45, 69, 72, 77],
		[45, 72, 77, 81],
		[45, 72, 77, 84],
		[57, 57, 60, 65],
		[57, 60, 65, 69],
		[57, 65, 69, 72],
		[57, 69, 72, 77],
		[57, 72, 77, 81],
		[57, 72, 77, 84]
	],

	"ii": [
		[50, 53, 57, 62],
		[50, 57, 62, 65],
		[50, 62, 65, 69],
		[50, 65, 69, 74],
		[50, 69, 74, 77],
		[50, 74, 77, 81]
	],

	"ii6": [
		[41, 50, 53, 57],
		[41, 53, 57, 62],
		[41, 57, 62, 65],
		[41, 62, 65, 69],
		[41, 65, 69, 74],
		[41, 69, 74, 77],
		[41, 74, 77, 81],
		[53, 57, 62, 65],
		[53, 62, 65, 69],
		[53, 65, 69, 74],
		[53, 69, 74, 77],
		[53, 74, 77, 81]
	],	
	
	"ii6/5": [
		[53, 69, 72, 74],
		[53, 72, 74, 81],
		[53, 74, 81, 84],
		[41, 69, 72, 74],
		[41, 72, 74, 81],
		[41, 74, 81, 84],
		[53, 57, 60, 62],
		[53, 60, 62, 69],
		[53, 62, 69, 72],
		[41, 50, 57, 60],
		[41, 57, 60, 62],
		[41, 60, 62, 69],
		[41, 62, 69, 72]
	],	
	
	"V": [
		[55, 59, 62, 67],
		[55, 62, 67, 71],
		[55, 67, 71, 74],
		[55, 71, 74, 79],
		[55, 74, 79, 83],
		[43, 50, 55, 59],
		[43, 55, 59, 62],
		[43, 59, 62, 67],
		[43, 62, 67, 71],
		[43, 67, 71, 74],
		[43, 71, 74, 79],
		[43, 74, 79, 83]
	],	
	
	"V7": [
		[55, 59, 62, 65],
		[55, 62, 65, 71],
		[55, 65, 71, 74],
		[55, 71, 74, 77],
		[55, 74, 77, 83],
		[43, 50, 53, 59],
		[43, 53, 59, 62],
		[43, 59, 62, 65],
		[43, 62, 65, 71],
		[43, 65, 71, 74],
		[43, 71, 74, 77],
		[43, 74, 77, 83]
	],	
	
	"V6": [
		[47, 55, 59, 62],
		[47, 59, 62, 67],
		[47, 62, 67, 71],
		[47, 67, 71, 74],
		[47, 71, 74, 79],
		[47, 74, 79, 83],
		[59, 62, 67, 71],
		[59, 67, 71, 74],
		[59, 71, 74, 79],
		[59, 74, 79, 83]
		
	],	
	
	"vii°6": [
		[50, 59, 62, 65],
		[50, 62, 65, 71],
		[50, 65, 71, 74],
		[50, 71, 74, 77],
		[50, 74, 77, 81]
	],	
	
	"V6/5": [
		[47, 53, 55, 62],
		[47, 55, 62, 65],
		[47, 62, 65, 67],
		[47, 65, 67, 74],
		[47, 67, 74, 77],
		[47, 74, 77, 79],
		[59, 62, 65, 67],
		[59, 65, 67, 74],
		[59, 67, 74, 77],
		[59, 74, 77, 79],
		
		
	],	
	
	"V4/3": [
		[50, 55, 59, 65],
		[50, 59, 65, 67],
		[50, 65, 67, 71],
		[50, 67, 71, 77],
		[50, 71, 77, 79],
		[50, 77, 79, 83]
	],	
	
	"V4/2": [
		[53, 59, 62, 67],
		[53, 62, 67, 71],
		[53, 67, 71, 74],
		[53, 71, 74, 79],
		[53, 74, 79, 83],
		[41, 50, 55, 59],
		[41, 55, 59, 62],
		[41, 59, 62, 67],
		[41, 62, 67, 71],
		[41, 67, 71, 74],
		[41, 71, 74, 79],
		[41, 74, 79, 83]
	],	
	
	"viiø7": [
		[47, 53, 57, 62],
		[47, 57, 62, 65],
		[47, 62, 65, 69],
		[47, 65, 69, 74],
		[47, 69, 74, 77],
		[59, 62, 65, 69],
		[59, 65, 69, 74],
		[59, 69, 74, 77],
		[59, 74, 77, 81]
	],	
	
	"viiø6/5": [
		[50, 57, 59, 65],
		[50, 59, 65, 69],
		[50, 65, 69, 71],
		[50, 69, 71, 77],
		[50, 71, 77, 81],
		[50, 77, 81, 83]
	],	
	
	"viiø4/3": [
		[53, 59, 62, 69],
		[53, 62, 69, 71],
		[53, 69, 71, 74],
		[53, 71, 74, 81],
		[53, 74, 81, 83],
		[41, 50, 57, 59],
		[41, 57, 59, 64],
		[41, 59, 62, 69],
		[41, 74, 81, 83],
		[41, 62, 69, 71],
		[41, 69, 71, 74],
		[41, 71, 74, 81]
	],	
	
	"viiø4/2": [
		[57, 62, 65, 71],
		[57, 65, 71, 74],
		[57, 71, 74, 77],
		[57, 74, 77, 83],
		[45, 62, 65, 71],
		[45, 65, 71, 74],
		[45, 71, 74, 77],
		[45, 74, 77, 83],
		[45, 50, 52, 59],
		[45, 53, 59, 62],
		[45, 59, 62, 65],
		[45, 62, 65, 71]
	],	
};	

function chordPrevention (prevChord, newChord) { //Rules!
	
	if (prevChord === newChord) {
		return true;
	}
	
	if (newChord === "I" && prevChord === "ii") {
		return true; // No I to ii!!
	}
	
	if (newChord === "I" && (prevChord === "IV" || prevChord === "IV6" || prevChord === "ii6" || prevChord === "ii6/5")) {
		return false; // Other predoms are cool after I
	} 
	
	if ((newChord === "V" || newChord === "V6") && (prevChord === "V7" ||prevChord === "V6/5" || prevChord === "V4/3" ||prevChord === "V4/2")) {
		return true; // V7 to V is not allowed!
	}
		
	if (newChord === "ii" && prevChord === "ii7") {
		return true; //No triad after 7th
	}
	
	if (newChord === "ii6" && prevChord === "ii6/5") {
		return true; //No triad after 7th
	}
	
	if (newChord === "ii" && prevChord === "ii6/5") {
		return true; //No triad after 7th
	}
	
	if (newChord === "vii°6" && (prevChord === "viiø7" ||prevChord === "viiø6/5" || prevChord === "viiø4/3" || prevChord === "viiø4/2")) {
		return true; //No triad after 7th
	}
	
	if ((newChord === "IV" || newChord === "ii6" || newChord === "ii6/5") && (prevChord === "viiø7" || prevChord === "V6/5")) {
		return true; //Prevent tritones in bass	
		
	}	
	if (newChord === "vii°6" && (prevChord === "V7" ||prevChord === "V6/5" || prevChord === "V4/3" || prevChord === "V4/2")) {
		return true; //No triad after 7th
	}
		//Move This function later on, remove from generatechordlist
	
	if (newChord === "I6" && (prevChord === "V6/5" ||prevChord === "V6")) {
		return true; //I6 cannot go to V6/5 or V6
	}	
	
	if (newChord === "I"  && prevChord === "V4/2") {
		return true; //I cannot go to V4/2
	}	
	
	if (newChord === "V4/2"  && prevChord === "V6/5") {
		return true; //V6/5 cannot go to V4/2
	}
	
	if (newChord === "V4/2"  && prevChord === "V7") {
		return true; //V7 cannot go to V4/2
	}
	
	if (newChord === "I6" && prevChord === "viiø7") {
		return true; //I6 cannot go to viiø7
	}	
	
	if ((newChord === "viiø7" || newChord === "viiø4/2") && prevChord === "I6") {
		return true; //viiø7 and viiø4/2 cannot go to I6
	}
	
	if (newChord === "I6" && (prevChord === "viiø7" || prevChord === "viiø4/2")) {
		return true; //I6 cannot go to viiø7 and viiø4/2 
	}
	
	if (newChord === "I" && (prevChord === "viiø4/3" || prevChord === "viiø6/5" || prevChord === "viiø4/2")) {
		return true; //seven half-dim inversions cannot go to I
	}
	
	if ((newChord === "viiø4/3" || newChord === "viiø6/5" || newChord === "viiø4/2") && prevChord === "I") {
		return true; // I cannot go to seven half-dim inversions
	}
	
	if (newChord === "Cad6/4" && prevChord ===  "viiø4/2") {
		return true;
	}
	
	return false;
}

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
		
	} //1 open
		
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
		
	// 1 open
	
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
		2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "viiø7", "viiø6/5", "viiø4/3", "viiø4/2"]
	}; //1 open
	
	var romanNumeralList = [];
	
	for (var i = 0; i < chordList.length; i++) {
		var num = chordList[i];
		var options = chordOptions[num];
		var chosenRoman;
		
		if (i === 0) {
			chosenRoman = "I"; // First chord is always root position tonic
			
		} else if (i === chordList.length -1) { //Chooses the final chord
			
			if (num === 0 ) {
			 	chosenRoman = Math.random() < 0.5 ? "I" : "I6"; // 50/50 of chord
			
			} else if (num === 2) {
				chosenRoman = "V"; 	//Final chord logic
				
			} else {
				do {
					chosenRoman = options[Math.floor(Math.random() * options.length)]; //Logic for other chords
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
		}
		} else if (i === 5) {
			if (num === 0) {
				var filteredOptions = [];
				for (var j = 0; j < options.length; j++) {
					if (options[j] !== "Cad6/4") {
						filteredOptions.push(options[j]);
					}
				}
				do {
					chosenRoman = Math.random() < 0.3 ? "Cad6/4" : filteredOptions[Math.floor(Math.random() * filteredOptions.length)];
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
			} else {
				do {
					chosenRoman = options[Math.floor(Math.random() * options.length)];
					// Makes Cad6/4 appear only at the 6th chord
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
			}
			} else if (i === chordList.length - 2 && finalCadence [0] === 1) {
				do {
					chosenRoman = "IV"; //Ensures Plagal if penultimate is 1
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman)); 
				
			} else if (i === chordList.length - 2 && finalCadence[0] === 2) {
				var dominantChords = ["V", "V7", "V6", "V6/5", "V4/3", "V4/2"];
				do {	
					chosenRoman = dominantChords[Math.floor(Math.random() * dominantChords.length)];
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman)); 
			} else {		
				do {
					chosenRoman = options[Math.floor(Math.random() * options.length)];
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman)); //Ensures the same chord is twice in a row.
			}
			
	// Looking at the second to last chord to ensure a proper cadence
		romanNumeralList.push(chosenRoman);
	// Assigns 0, 1 and 2 to chords through map(), teturn line is choosing the specific chord.
	}
	
	if (romanNumeralList[5] == "Cad6/4") {
		var seventhChord;
		do {
			seventhChord = ["V", "V7", "V4/2"][Math.floor(Math.random() * 3)];
		} while (chordPrevention(romanNumeralList[5], seventhChord));
		//7th chord is V, V7, or V4/2 if Cad6/4 is chosen
		var eighthChord;
		if (seventhChord === "V" || seventhChord === "V7") {
			do {
			eighthChord = Math.random() < 0.5 ? "I" : "I6";
			} while (chordPrevention(romanNumeralList[6], eighthChord));
		} else if (seventhChord === "V4/2") {
			eighthChord = "I6";
		}
		
		romanNumeralList[6] = seventhChord;
		romanNumeralList[7] = eighthChord;
	}
	
	return romanNumeralList;
	}

function assignMIDI(chordList) {
    var midiList = []; 
	
	function hasParallel5thsor8ves(prevVoicing, currentVoicing) {
		
		for (var i = 0; i < Math.min(prevVoicing.length, currentVoicing.length); i++) {
			for (var j = i + 1; j < Math.min(prevVoicing.length, currentVoicing.length); j++) { //This checks each distinct voice pair)
				var prevInterval = Math.abs(prevVoicing[i] - prevVoicing[j]);
				var currInterval = Math.abs(currentVoicing[i] - currentVoicing[j]);
				
				if (prevVoicing[i] === currentVoicing[i] && prevVoicing[j] === currentVoicing[j]) {
					continue; //Common tones are allowed
				}
				
				if (prevInterval === 7 && currInterval === 7) {
						if ((prevVoicing[i] !== currentVoicing[i] || prevVoicing[j] !== currentVoicing[j])) {
							return true; // No Parallel 5ths!
						}
				}
				
				if (prevInterval === 12 && currInterval === 12) {
					if ((prevVoicing[i] !== currentVoicing[i] || prevVoicing[j] !== currentVoicing[j])) { //Ensures that if two voices are a 5th or 8ve apart but are common tones, it allows it
						return true; // No Parallel 8ves!
					}
				}
				if (prevInterval === 19 && currInterval === 19) {
						if ((prevVoicing[i] !== currentVoicing[i] || prevVoicing[j] !== currentVoicing[j])) {
							return true; // No Parallel 5ths + 8ve!
						}
				}
				
				if (prevInterval === 24 && currInterval === 24) {
					if ((prevVoicing[i] !== currentVoicing[i] || prevVoicing[j] !== currentVoicing[j])) { //Ensures that if two voices are a 5th or 8ve apart but are common tones, it allows it
						return true; // No Parallel 16ths!
					}
				}
			}
		}
		return false; //Returns false when there are no parallels :)
	}
	
	function hasVCross(prevVoicing, currentVoicing) {
		for (var i = 0; i < prevVoicing.length; i++) { 
			for (var j = i + 1;  j < prevVoicing.length; j++) {//Check each voice pair
			
				if (prevVoicing[i] > prevVoicing[j] && currentVoicing[i] < currentVoicing[j]) { //Detects Voice crossing Low to high (If voice 1 is currently higher than voice 2, but will be higher than voice 2 in the next chord, choose another voicing.
					return true; 
				}
			
				if (prevVoicing[i] < prevVoicing[j] && currentVoicing[i] > currentVoicing[j]) { //Detects Voice crossing High to low
					return true;
				}
			
			}
		}
		return false;
	}

	function hasBigBass(prevVoicing, currentVoicing) {
		var prevBass = prevVoicing[0]; //Lowest note in previous chord
		var currentBass = currentVoicing[0]; //Lowest note in the current chord
		
		var bassLeap = Math.abs(prevBass - currentBass);
		
		if (bassLeap > 8) { //Leaps will not exceed a minor 6th
			return true; 
		}
		
		return false;
	}


	function dropSol(prevVoicing, currentVoicing) {
		var prevBass = prevVoicing[0]; //Lowest note in previous chord
		var currentBass = currentVoicing[0]; //Lowest note in the current chord
		
		if (prevBass === 55 && currentBass === 55) { //If two sols are in a row
				if(Math.random() < 0.5) {
					currentVoicing[0] -= 12; //Drop bass from 55 to 43
				}
			}
		
		return currentVoicing;
		
	}

	for (var index = 0; index < chordList.length; index++) {//Index is used for numerical placement, loops through each chord
		var chord = chordList[index];
		
		if (index === 0 && chord === "I") {
			var firstChordOptions = [
				[48, 60, 64, 67],
				[48, 64, 67, 72],
				[48, 67, 72, 76]					//First chord is one of these options!
			];
			var selectedVoicing = firstChordOptions[Math.floor(Math.random() * firstChordOptions.length)]; //Randomly choose one of the three voicings.
			midiList.push(selectedVoicing);
		}
		
		else if (index > 0) { //For the other chords
			//var prevChord = chordList[index - 1]; //Get previous RN
			var prevVoicing = midiList[index - 1]; //Get previous voicing
			var currentChordOptions = chordVoicings[chord]; //Get the possible options
			
			if (currentChordOptions) { //Calculate the distance between the previous voicing and all potential voicings
				var validVoicings = currentChordOptions.filter(function(currentVoicing) { //Filters out bad voicings
					return !hasParallel5thsor8ves(prevVoicing, currentVoicing) && //Removes voicings with parallels
							!hasVCross(prevVoicing, currentVoicing); //Removes voicings that cross
							!hasBigBass(prevVoicing, currentVoicing); //Removes voicings with large bass leaps
				});
				
				var possibleVoicings = validVoicings.length > 0 ? validVoicings : currentChordOptions; //"Just in case", if parallels cannot be avoided, use the closest voicing.		
				
				var closestVoicing = possibleVoicings.reduce(function(closest, currentVoicing) { //.reduce is a callback function, finds the closest function
					var distance = 0;
					for (var i = 0; i < Math.min(prevVoicing.length, currentVoicing.length); i++) { //Calculates the distance between all potential options
						distance += Math.abs(prevVoicing[i] - currentVoicing[i]); //Finds the absolute distance
					} // If the current voicing is closer, update it!
					
					if (distance < closest.distance) {
						return { voicing: currentVoicing, distance: distance }; //If a smaller distance is found, use that voicing.
					}
					return closest; //Returns the closest voicing
				},  { voicing: [], distance: Infinity}).voicing; //Start with Infinity to ensure the first voicing.
					
					
				closestVoicing = dropSol(prevVoicing, closestVoicing); 	
				midiList.push(closestVoicing) //Return the closest voicing
			} else {
            	midiList.push([0]); // Default fallback for unknown chords
        	}
		} else {
		
			midiList.push([1]); // Fallback if no voicing is found
    	}
	}
    return midiList; // This should return an array of arrays
}


//Activate code with a button
function bang () {
	var romanNumeralList = generateChordList(); // gets the list
	var midiChordList = assignMIDI(romanNumeralList);	
	outlet (0, romanNumeralList);
	outlet (1, [].concat.apply([],midiChordList));// Sends MIDI data out as MIDI numbers
}