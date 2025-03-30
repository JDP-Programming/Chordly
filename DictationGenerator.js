
inlets = 2;
outlets = 2;

	//	0: ["I", "I6", "iii", "vi"],
	//	1: ["IV", "IV6", "ii", "ii6", "ii6/5"],
	//	2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "viiø7", "viiø6/5", "viiø4/3", "viiø4/2"]
	
var currentMode = "Major";

function msg_int(val) {
	if (inlet === 1) {
		if (val === 0) {
			currentMode = "major";
		} else if (val === 1) {
			currentMode = "minor";
		} else if (val === 2) {
			currentMode = "major+";
		} else if (val === 3) {
			currentMode = "minor+";
		}
	}
}
	
	
var chordVoicings = { //Low bass, low harm OR high bass, high harm OR low bass, high harm (MIDI 41-84) (Bass MIDI 40-60), "Tenor" note can be close depending on the bass note
	
	//minor chords
	
	"i": [
		[48, 55, 60, 63],
		[48, 60, 63, 67],
		[48, 63, 67, 72],
		[48, 67, 72, 75],
		[60, 60, 63, 67],
		[60, 63, 67, 72],
		[60, 67, 72, 75],
		[60, 72, 75, 79],
		[60, 75, 79, 84],
		[48, 72, 75, 79],
		[48, 75, 79, 84]
	],
	
	"i6": [
		[39, 48, 51, 55],
		[39, 51, 55, 60],
		[39, 55, 60, 63],
		[39, 60, 63, 67],
		[39, 63, 67, 72],
		[39, 67, 72, 75],
		[39, 72, 75, 84],
		[51, 55, 60, 63],
		[51, 60, 63, 67],
		[51, 63, 67, 72],
		[51, 67, 72, 75],
		[51, 72, 75, 84]
	],
	
	"Cad6/4(m)" : [
		[43, 48, 51, 55],
		[43, 51, 55, 60],
		[43, 55, 60, 53],
		[43, 60, 63, 67],
		[43, 63, 67, 72],
		[43, 67, 72, 75],
		[43, 60, 63, 67],
		[43, 63, 67, 72],
		[43, 66, 72, 75],
		[43, 72, 75, 79],
		[43, 75, 79, 84],
		[43, 72, 75, 79],
		[43, 75, 79, 84],
		
		[55, 60, 63, 67],
		[55, 63, 67, 72],
		[55, 67, 72, 75],
		[55, 60, 63, 67],
		[55, 63, 67, 72],
		[55, 66, 72, 75],
		[55, 72, 75, 79],
		[55, 75, 79, 84],
		[55, 72, 75, 79],
		[55, 75, 79, 84]
	],
		
	"♭III": [
		[39, 46, 51, 55],
		[39, 51, 55, 58],
		[39, 55, 58, 63],
		[39, 58, 63, 67],
		[39, 63, 67, 70],
		[39, 67, 70, 75],
		[39, 70, 76, 82],
		[51, 58, 63, 67],
		[51, 63, 67, 70],
		[51, 67, 70, 75],
		[51, 70, 75, 79],
		[51, 75, 79, 82]
	],
		
	"♭VI": [
		[44, 51, 56, 60],
		[44, 56, 60, 63],
		[44, 60, 63, 68],
		[44, 63, 68, 72],
		[56, 56, 60, 63],
		[56, 60, 63, 68],
		[56, 63, 68, 72],
		[56, 68, 72, 75],
		[56, 72, 75, 80],
		[56, 75, 80, 84],
		[44, 68, 72, 75],
		[44, 72, 75, 80],
		[44, 75, 80, 84]
	],
	
	"iv": [
		[53, 60, 65, 68],
		[53, 65, 68, 72],
		[53, 68, 72, 77],
		[53, 72, 77, 80],
		[53, 77, 80, 84],
		[41, 48, 53, 56],
		[41, 53, 56, 60],
		[41, 56, 60, 65],
		[41, 60, 65, 68],
		[41, 65, 68, 72],
		[41, 68, 72, 77],
		[41, 72, 77, 80],
		[41, 77, 80, 84]
	],	
	
	"iv6": [
		[44, 53, 56, 60],
		[44, 56, 60, 65],
		[44, 60, 65, 68],
		[44, 65, 68, 72],
		[44, 68, 72, 77],
		[44, 72, 77, 80],
		[44, 77, 80, 84],
		[56, 56, 60, 65],
		[56, 60, 65, 68],
		[56, 65, 68, 72],
		[56, 68, 72, 77],
		[56, 72, 77, 80],
		[56, 77, 80, 84]
	],

	"ii°6": [
		[41, 50, 53, 56],
		[41, 53, 56, 62],
		[41, 56, 62, 65],
		[41, 62, 65, 68],
		[41, 65, 68, 74],
		[41, 68, 74, 77],
		[41, 74, 77, 80],
		[53, 56, 62, 65],
		[53, 62, 65, 68],
		[53, 65, 68, 74],
		[53, 68, 74, 77],
		[53, 74, 77, 80]
	],	
	
	"iiø6/5": [
		[53, 68, 72, 74],
		[53, 72, 74, 80],
		[53, 74, 80, 84],
		[41, 68, 72, 74],
		[41, 72, 74, 80],
		[41, 74, 80, 84],
		[53, 56, 60, 62],
		[53, 60, 62, 68],
		[53, 62, 68, 72],
		[41, 50, 56, 60],
		[41, 56, 60, 62],
		[41, 60, 62, 68],
		[41, 62, 68, 72]
	],	
	
	"♭VII": [
		[46, 53, 58, 62],
    	[46, 58, 62, 65],
    	[46, 62, 65, 70],
    	[46, 65, 70, 74],
    	[58, 58, 62, 65],
    	[58, 62, 65, 70],
    	[58, 65, 70, 74],
    	[58, 70, 74, 77],
    	[58, 74, 77, 82],
    	[46, 70, 74, 77],
    	[46, 74, 77, 82]
	],
	
	"vii°7": [
		[47, 53, 56, 62],
		[47, 56, 62, 65],
		[47, 62, 65, 68],
		[47, 65, 68, 74],
		[47, 68, 74, 77],
		[59, 62, 65, 68],
		[59, 65, 68, 74],
		[59, 68, 74, 77],
		[59, 74, 77, 80]
	],	
	
	"vii°6/5": [
		[50, 56, 59, 65],
		[50, 59, 65, 68],
		[50, 65, 68, 71],
		[50, 68, 71, 77],
		[50, 71, 77, 80],
		[50, 77, 80, 83]
	],	
	
	"vii°4/3": [
		[53, 59, 62, 68],
		[53, 62, 68, 71],
		[53, 68, 71, 74],
		[53, 71, 74, 80],
		[53, 74, 80, 83],
		[41, 50, 56, 59],
		[41, 56, 59, 65],
		[41, 59, 62, 68],
		[41, 74, 80, 83],
		[41, 62, 68, 71],
		[41, 68, 71, 74],
		[41, 71, 74, 80]
	],	
	
	"vii°4/2": [
		[56, 62, 65, 71],
		[56, 65, 71, 74],
		[56, 71, 74, 77],
		[56, 74, 77, 83],
		[44, 62, 65, 71],
		[44, 65, 71, 74],
		[44, 71, 74, 77],
		[44, 74, 77, 83],
		[44, 50, 52, 59],
		[44, 53, 59, 62],
		[44, 59, 62, 65],
		[44, 62, 65, 71]
	],	
	
	//Major chords
	
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
		[52, 72, 76, 84]
	],
	
	"Cad6/4" : [
		[43, 48, 52, 55],
		[43, 52, 55, 60],
		[43, 55, 60, 64],
		[43, 60, 64, 67],
		[43, 64, 67, 72],
		[43, 67, 72, 76],
		[43, 60, 64, 67],
		[43, 64, 67, 72],
		[43, 66, 72, 76],
		[43, 72, 76, 79],
		[43, 76, 79, 84],
		[43, 72, 76, 79],
		[43, 76, 79, 84],
		[55, 60, 64, 67],
		[55, 64, 67, 72],
		[55, 67, 72, 76],
		[55, 60, 64, 67],
		[55, 64, 67, 72],
		[55, 66, 72, 76],
		[55, 72, 76, 79],
		[55, 76, 79, 84],
		[55, 72, 76, 79],
		[55, 76, 79, 84]
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
		[52, 76, 79, 83]
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
		[41, 48, 53, 57],
		[41, 53, 57, 60],
		[41, 57, 60, 65],
		[41, 60, 65, 69],
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
		[45, 77, 81, 84],
		[57, 57, 60, 65],
		[57, 60, 65, 69],
		[57, 65, 69, 72],
		[57, 69, 72, 77],
		[57, 72, 77, 81],
		[57, 77, 81, 84]
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
		[55, 79, 83, 86],
		[43, 50, 55, 59],
		[43, 55, 59, 62],
		[43, 59, 62, 67],
		[43, 62, 67, 71],
		[43, 67, 71, 74],
		[43, 71, 74, 79],
		[43, 74, 79, 83],
		[43, 79, 83, 86]
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
		[43, 74, 77, 83],
		[43, 77, 83, 86]
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
		[59, 74, 79, 83],
		[59, 79, 83, 86]
		
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
		[47, 77, 79, 86],
		[59, 62, 65, 67],
		[59, 65, 67, 74],
		[59, 67, 74, 77],
		[59, 74, 77, 79],
		[59, 77, 79, 86]
		
	],	
	
	"V4/3": [
		[50, 55, 59, 65],
		[50, 59, 65, 67],
		[50, 65, 67, 71],
		[50, 67, 71, 77],
		[50, 71, 77, 79],
		[50, 77, 79, 83],
		[62, 67, 71, 77],
		[62, 71, 77, 79],
		[62, 77, 79, 83]
	],	
	
	"V4/2": [
		[53, 59, 62, 67],
		[53, 62, 67, 71],
		[53, 67, 71, 74],
		[53, 71, 74, 79],
		[53, 74, 79, 83],
		[53, 79, 83, 86],
		[41, 50, 55, 59],
		[41, 55, 59, 62],
		[41, 59, 62, 67],
		[41, 62, 67, 71],
		[41, 67, 71, 74],
		[41, 71, 74, 79],
		[41, 74, 79, 83],
		[41, 79, 83, 86]
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
		[41, 57, 59, 65],
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
	
	//Challenge Chords
	
	"IV7": [
		[53, 60, 64, 69],
		[53, 64, 69, 72],
		[53, 69, 72, 76],
		[53, 72, 76, 81],
		[53, 76, 81, 84],
		[41, 64, 69, 72],
		[41, 69, 72, 76],
		[41, 72, 76, 81],
		[41, 76, 81, 84]
	],	
	
	"IV6/5": [
		[45, 52, 53, 60],
		[45, 53, 60, 64],
		[45, 60, 64, 65],
		[45, 64, 65, 72],
		[45, 65, 72, 76],
		[45, 72, 76, 77],
		[45, 76, 77, 84],
		[57, 60, 64, 65],
		[57, 64, 65, 72],
		[57, 65, 72, 76],
		[57, 72, 76, 77],
		[57, 76, 77, 84]
	],
	
	"iv7": [
		[53, 60, 63, 68],
		[53, 63, 68, 72],
		[53, 68, 72, 75],
		[53, 72, 75, 80],
		[53, 75, 80, 84],
		[41, 63, 68, 72],
		[41, 68, 72, 75],
		[41, 72, 75, 80],
		[41, 75, 80, 84]
	],	
	
	"iv6/5": [
		[44, 51, 53, 60],
		[44, 53, 60, 63],
		[44, 60, 63, 65],
		[44, 63, 65, 72],
		[44, 65, 72, 75],
		[44, 72, 75, 77],
		[44, 75, 77, 84],
		[56, 60, 63, 65],
		[56, 63, 65, 72],
		[56, 65, 72, 75],
		[56, 72, 75, 77],
		[56, 75, 77, 84]
	],
	
	"♭II6" : [ //Might need rule to prevent Augmented 2nds (le to ti)
		[49, 53, 56, 61],
		[49, 56, 61, 65],
		[49, 61, 65, 68],
		[49, 65, 68, 73],
		[49, 68, 73, 77],
		[49, 73, 77, 80],
		[49, 77, 80, 85]
	],
	
	"It+6" : [
		[44, 54, 60, 60],
		[44, 60, 60, 66],
		[44, 60, 66, 72],
		[44, 66, 72, 72],
		[44, 72, 72, 78],
		[44, 72, 78, 84],
		[56, 60, 60, 66],
		[56, 60, 66, 72],
		[56, 66, 72, 72],
		[56, 72, 72, 78],
		[56, 72, 78, 84]
	],
	
		
	"Fr+6" : [
		[44, 54, 60, 62],
		[44, 60, 62, 66],
		[44, 62, 66, 72],
		[44, 66, 72, 74],
		[44, 72, 74, 78],
		[44, 74, 78, 84],
		[56, 60, 62, 66],
		[56, 62, 66, 72],
		[56, 66, 72, 74],
		[56, 74, 72, 78],
		[56, 74, 78, 84]
	],
	
	"Ger+6" : [
		[44, 54, 60, 63],
		[44, 60, 63, 66],
		[44, 63, 66, 72],
		[44, 66, 72, 75],
		[44, 72, 75, 78],
		[44, 75, 78, 84],
		[56, 60, 63, 66],
		[56, 63, 66, 72],
		[56, 66, 72, 75],
		[56, 75, 72, 78],
		[56, 75, 78, 84]
	],
	
	"III#": [
		[52, 59, 64, 68],
		[52, 64, 68, 71],
		[52, 68, 71, 76],
		[52, 71, 76, 80],
		[52, 76, 80, 83],
		[40, 47, 52, 56],
		[40, 52, 56, 59],
		[40, 56, 59, 64],
		[40, 59, 64, 68],
		[40, 64, 68, 71],
		[40, 68, 71, 76],
		[40, 71, 76, 80],
		[40, 76, 80, 83]
	],
	
	"VI#" : [
		[57, 64, 69, 73],
		[57, 69, 73, 76],
		[57, 73, 76, 81],
		[57, 76, 81, 85],
		[45, 52, 57, 61],
		[45, 57, 61, 64],
		[45, 61, 64, 69],
		[45, 64, 69, 73],
		[45, 69, 73, 76],
		[45, 73, 76, 81],
		[45, 76, 81, 85]
	],
	
	"V+": [
		[55, 59, 63, 67],
		[55, 63, 67, 71],
		[55, 67, 71, 75],
		[55, 71, 75, 79],
		[55, 75, 79, 83],
		[43, 51, 55, 59],
		[43, 55, 59, 63],
		[43, 59, 63, 67],
		[43, 63, 67, 71],
		[43, 67, 71, 75],
		[43, 71, 75, 79],
		[43, 75, 79, 83]
	],	
	
	"I+": [
		[48, 56, 60, 64],
		[48, 60, 64, 68],
		[48, 64, 68, 72],
		[48, 68, 72, 76],
		[60, 60, 64, 68],
		[60, 64, 68, 72],
		[60, 68, 72, 76],
		[60, 72, 76, 80],
		[60, 76, 80, 84],
		[48, 72, 76, 80],
		[48, 76, 80, 84]
	],
	
	//Applied Chords

	"V/V": [
		[50, 55, 57, 62],
		[50, 57, 62, 66],
		[50, 62, 66, 69],
		[50, 66, 69, 74],
		[50, 69, 74, 78],
		[50, 74, 78, 81]
	],
	
	"V7/V": [
		[50, 55, 57, 60],
		[50, 57, 60, 66],
		[50, 60, 66, 69],
		[50, 66, 69, 72],
		[50, 69, 72, 78],
		[50, 72, 78, 81],
		[50, 78, 81, 84]
	],

	"V6/V": [
		[42, 50, 57, 62],
		[42, 57, 62, 62],
		[42, 62, 62, 69],
		[42, 62, 69, 74],
		[42, 69, 74, 74],
		[42, 74, 74, 81],
		[54, 62, 62, 69],
		[54, 62, 69, 74],
		[54, 69, 74, 74],
		[54, 74, 74, 81]
	],
	
	"V6/5/V": [
		[42, 50, 57, 60],
		[42, 57, 60, 62],
		[42, 60, 62, 69],
		[42, 62, 69, 72],
		[42, 69, 72, 74],
		[42, 72, 74, 81],
		[42, 74, 81, 84],
		[54, 60, 62, 69],
		[54, 62, 69, 72],
		[54, 69, 72, 74],
		[54, 72, 74, 81],
		[54, 74, 81, 84]
	],
	
	"V4/3/V" : [
		[45, 50, 54, 60],
		[45, 54, 60, 62],
		[45, 60, 62, 66],
		[45, 62, 66, 72],
		[45, 66, 72, 74],
		[45, 72, 74, 78],
		[45, 74, 78, 84],
		[57, 60, 62, 66],
		[57, 62, 66, 72],
		[57, 66, 72, 74],
		[57, 72, 74, 78],
		[57, 74, 78, 84]
	],
	
	"V4/2/V" : [
		[48, 54, 57, 62],
		[48, 57, 62, 66],
		[48, 62, 66, 69],
		[48, 66, 69, 74],
		[48, 69, 74, 78],
		[48, 74, 78, 81],
		[60, 62, 66, 69],
		[60, 66, 69, 74],
		[60, 69, 74, 78],
		[60, 74, 78, 81]
	],
	
	"V/iv" : [
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
	
	"V7/iv" : [
		[48, 55, 58, 64],
		[48, 58, 64, 67],
		[48, 64, 67, 70],
		[48, 67, 70, 76],
		[60, 57, 64, 67],
		[60, 64, 67, 70],
		[60, 67, 70, 76],
		[60, 70, 76, 79],
		[60, 76, 79, 82],
		[48, 70, 76, 79],
		[48, 76, 79, 82]
	],
	
	"V7/IV" : [
		[48, 55, 58, 64],
		[48, 58, 64, 67],
		[48, 64, 67, 70],
		[48, 67, 70, 76],
		[60, 57, 64, 67],
		[60, 64, 67, 70],
		[60, 67, 70, 76],
		[60, 70, 76, 79],
		[60, 76, 79, 82],
		[48, 70, 76, 79],
		[48, 76, 79, 82]
	],
	
		
	"V6/iv" : [
		[40, 48, 55, 60],
		[40, 55, 60, 60],
		[40, 60, 60, 67],
		[40, 60, 67, 72],
		[40, 67, 72, 72],
		[40, 72, 72, 79],
		[40, 72, 79, 84],
		[40, 79, 84, 84],
		[52, 60, 60, 67],
		[52, 60, 67, 72],
		[52, 67, 72, 72],
		[52, 72, 72, 79],
		[52, 72, 79, 84],
		[52, 79, 84, 84]
	], 
	
	"V6/5/iv" : [
		[40, 48, 55, 58],
		[40, 55, 58, 60],
		[40, 58, 60, 67],
		[40, 60, 67, 70],
		[40, 67, 70, 72],
		[40, 70, 72, 79],
		[40, 72, 79, 82],
		[40, 79, 82, 84],
		[52, 58, 60, 67],
		[52, 60, 67, 70],
		[52, 67, 70, 72],
		[52, 70, 72, 79],
		[52, 72, 79, 82],
		[52, 79, 82, 84]
	], 
	
	"V6/5/IV" : [
		[40, 48, 55, 58],
		[40, 55, 58, 60],
		[40, 58, 60, 67],
		[40, 60, 67, 70],
		[40, 67, 70, 72],
		[40, 70, 72, 79],
		[40, 72, 79, 82],
		[40, 79, 82, 84],
		[52, 58, 60, 67],
		[52, 60, 67, 70],
		[52, 67, 70, 72],
		[52, 70, 72, 79],
		[52, 72, 79, 82],
		[52, 79, 82, 84]
	], 
	
	"V/ii" : [
		[57, 64, 69, 73],
		[57, 69, 73, 76],
		[57, 73, 76, 81],
		[57, 76, 81, 85],
		[45, 52, 57, 61],
		[45, 57, 61, 64],
		[45, 61, 64, 69],
		[45, 64, 69, 73],
		[45, 69, 73, 76],
		[45, 73, 76, 81],
		[45, 76, 81, 85]
	],
	
		
	"V7/ii" : [
		[57, 64, 67, 73],
		[57, 67, 73, 76],
		[57, 73, 76, 79],
		[57, 76, 79, 85],
		[45, 52, 55, 61],
		[45, 55, 61, 64],
		[45, 61, 64, 67],
		[45, 64, 67, 73],
		[45, 67, 73, 76],
		[45, 73, 76, 79],
		[45, 76, 79, 85]
	],
	
	"V6/ii" : [
		[49, 57, 57, 64],
    	[49, 57, 64, 69],
    	[49, 64, 69, 69],
    	[49, 69, 69, 76],
		[49, 69, 76, 81],
		[49, 76, 81, 81],
	],
	
	"V6/5/ii" : [
		[49, 55, 57, 64],
    	[49, 57, 64, 67],
    	[49, 64, 67, 69],
    	[49, 67, 69, 76],
		[49, 69, 76, 79],
		[49, 76, 79, 81],
	],
	
	"V4/3/ii": [
    	[40, 45, 49, 55],
    	[40, 49, 55, 57],
    	[40, 55, 57, 61],
    	[40, 57, 61, 67],
    	[40, 61, 67, 69],
    	[40, 67, 69, 73],
    	[40, 69, 73, 79],
		[40, 73, 79, 81],
    	[52, 55, 57, 61],
    	[52, 57, 61, 67],
    	[52, 61, 67, 69],
    	[52, 67, 69, 73],
    	[52, 69, 73, 79],
		[52, 73, 79, 81]
	],

	"V4/2/ii": [
    	[43, 49, 52, 57],
    	[43, 52, 57, 61],
    	[43, 57, 61, 64],
    	[43, 61, 64, 69],
    	[43, 64, 69, 73],
    	[43, 69, 73, 76],
		[43, 73, 76, 81],
    	[55, 57, 61, 64],
    	[55, 61, 64, 69],
    	[55, 64, 69, 73],
    	[55, 69, 73, 76],
		[55, 73, 76, 81],
	],
	
	"V/iii": [
    	[59, 66, 71, 75],
    	[59, 71, 75, 78],
    	[59, 75, 78, 83],
    	[59, 78, 83, 87],
    	[47, 54, 59, 63],
    	[47, 59, 63, 66],
    	[47, 63, 66, 71],
    	[47, 66, 71, 75],
    	[47, 71, 75, 78],
    	[47, 75, 78, 83]
	],

	"V7/iii": [
    	[59, 66, 69, 75],
    	[59, 69, 75, 78],
    	[59, 75, 78, 81],
    	[59, 78, 81, 87],
    	[47, 54, 57, 63],
    	[47, 57, 63, 66],
    	[47, 63, 66, 69],
    	[47, 66, 69, 75],
    	[47, 69, 75, 78],
    	[47, 75, 78, 81]
	],

	"V6/iii": [
    	[51, 59, 59, 66],
    	[51, 59, 66, 71],
    	[51, 66, 71, 71],
    	[51, 71, 71, 78],
    	[51, 71, 78, 83],
    	[51, 78, 83, 83]
	],

	"V6/5/iii": [
    	[51, 57, 59, 66],
    	[51, 59, 66, 69],
    	[51, 66, 69, 71],
    	[51, 69, 71, 78],
    	[51, 71, 78, 81],
    	[51, 78, 81, 83]
	],
	
	"V/vi": [
    	[52, 59, 64, 68],
    	[52, 64, 68, 71],
    	[52, 68, 71, 76],
   		[52, 71, 76, 80],
		[53, 76, 80, 83],
    	[40, 47, 52, 56],
    	[40, 52, 56, 59],
    	[40, 56, 59, 64],
    	[40, 59, 64, 68],
    	[40, 64, 68, 71],
    	[40, 68, 71, 76],
    	[40, 71, 76, 80],
		[40, 76, 80, 83],
	],

	"V7/vi": [
    	[52, 59, 62, 68],
    	[52, 62, 68, 71],
    	[52, 68, 71, 74],
    	[52, 71, 74, 80],
		[52, 74, 80, 83],
    	[40, 47, 50, 56],
   		[40, 50, 56, 59],
    	[40, 56, 59, 62],
    	[40, 59, 62, 68],
    	[40, 62, 68, 71],
    	[40, 68, 71, 74],
    	[40, 71, 74, 80],
		[49, 74, 80, 83]
	],

	"V6/vi": [
    	[44, 52, 52, 59],
    	[44, 52, 59, 64],
    	[44, 59, 64, 64],
    	[44, 64, 64, 71],
    	[44, 64, 71, 76],
    	[44, 71, 76, 76],
		[44, 76, 76, 83],
		[56, 59, 64, 64],
    	[56, 64, 64, 71],
    	[56, 64, 71, 76],
    	[56, 71, 76, 76],
		[56, 76, 76, 83],
	],

	"V6/5/vi": [
    	[44, 50, 52, 59],
    	[44, 52, 59, 62],
    	[44, 59, 62, 64],
    	[44, 62, 64, 71],
   		[44, 64, 71, 74],
    	[44, 71, 74, 76],
		[44, 74, 76, 83],
		[56, 59, 62, 64],
    	[56, 62, 64, 71],
   		[56, 64, 71, 74],
    	[56, 71, 74, 76],
		[56, 74, 76, 83]
	],

	"V/♭III": [
    	[58, 65, 70, 74],
    	[58, 70, 74, 77],
    	[58, 74, 77, 82],
    	[58, 77, 82, 86],
    	[46, 53, 58, 62],
    	[46, 58, 62, 65],
    	[46, 62, 65, 70],
    	[46, 65, 70, 74],
    	[46, 70, 74, 77],
    	[46, 74, 77, 82]
	],

	"V7/♭III": [
    	[58, 65, 68, 74],
    	[58, 68, 74, 77],
    	[58, 74, 77, 80],
    	[58, 77, 80, 86],
    	[46, 53, 56, 62],
    	[46, 56, 62, 65],
    	[46, 62, 65, 68],
    	[46, 65, 68, 74],
    	[46, 68, 74, 77],
    	[46, 74, 77, 80]
	],

	"V6/♭III": [
    	[50, 58, 58, 65],
    	[50, 58, 65, 70],
    	[50, 65, 70, 70],
    	[50, 70, 70, 77],
    	[50, 70, 77, 82],
    	[50, 77, 82, 82]
	],

	"V6/5/♭III": [
    	[50, 56, 58, 65],
    	[50, 58, 65, 68],
    	[50, 65, 68, 70],
    	[50, 68, 70, 77],
    	[50, 70, 77, 80],
    	[50, 77, 80, 82]
	],	

	"V/♭VII": [
    	[53, 60, 65, 69],
    	[53, 65, 69, 72],
    	[53, 69, 72, 77],
    	[53, 72, 77, 81],
    	[54, 77, 81, 84],
    	[41, 48, 53, 57],
    	[41, 53, 57, 60],
    	[41, 57, 60, 65],
    	[41, 60, 65, 69],
    	[41, 65, 69, 72],
    	[41, 69, 72, 77],
    	[41, 72, 77, 81],
    	[41, 77, 81, 84]
	],

	"V7/♭VII": [
    	[53, 60, 63, 69],
    	[53, 63, 69, 72],
    	[53, 69, 72, 75],
    	[53, 72, 75, 81],
    	[53, 75, 81, 84],
    	[41, 48, 51, 57],
    	[41, 51, 57, 60],
    	[41, 57, 60, 63],
    	[41, 60, 63, 69],
    	[41, 63, 69, 72],
    	[41, 69, 72, 75],
    	[41, 72, 75, 81],
    	[50, 75, 81, 84]
	],

	"V6/♭VII": [
    	[45, 53, 53, 60],
    	[45, 53, 60, 65],
    	[45, 60, 65, 65],
    	[45, 65, 65, 72],
    	[45, 65, 72, 77],
    	[45, 72, 77, 77],
    	[45, 77, 77, 84],
    	[57, 60, 65, 65],
    	[57, 65, 65, 72],
    	[57, 65, 72, 77],
    	[57, 72, 77, 77],
    	[57, 77, 77, 84]
	],

	"V6/5/♭VII": [
    	[45, 51, 53, 60],
    	[45, 53, 60, 63],
    	[45, 60, 63, 65],
    	[45, 63, 65, 72],
    	[45, 65, 72, 75],
    	[45, 72, 75, 77],
    	[45, 75, 77, 84],
    	[57, 60, 63, 65],
    	[57, 63, 65, 72],
    	[57, 65, 72, 75],
    	[57, 72, 75, 77],
    	[57, 75, 77, 84]
	],

	//dimished/Whatever
};	


var debugCounter = 0;

function chordPrevention (prevChord, newChord) { //Rules!
	debugCounter++;
	
if (debugCounter > 1000) {
		post("Infinite loop detected! Prev Chord: " + prevChord + ", New Chord: " + newChord + "\n");
		return true; //Force invalid response to break the loop
	}
		
	post("Prev Chord: " + prevChord + ", New Chord: " + newChord + "\n"); 
			
	if (prevChord === newChord) {
		return true;
	}
	
	if ((newChord === "I" || newChord === "I+") && prevChord === "ii") {
		return true; // No I to ii!!
	}
	
	if ((newChord === "V" || newChord === "V6" || newChord === "V+") && (prevChord === "V7" ||prevChord === "V6/5" || prevChord === "V4/3" ||prevChord === "V4/2")) {
		return true; // V7 to V is not allowed!
	}
		
	if (newChord === "ii" && prevChord === "ii7") {
		return true; //No triad after 7th
	}
	
	if (newChord === "ii6" && prevChord === "ii6/5") {
		return true; //No triad after 7th
	}
	
	if (newChord === "ii°6" && prevChord === "ii°6/5") {
		return true; //No triad after 7th
	}
	
	if (newChord === "ii" && prevChord === "ii6/5") {
		return true; //No triad after 7th
	}
	
	if (newChord === "vii°6" && (prevChord === "viiø7" ||prevChord === "viiø6/5" || prevChord === "viiø4/3" || prevChord === "viiø4/2")) {
		return true; //No triad after 7th
	}
	
	if (newChord === "vii°6" && (prevChord === "vii°7" ||prevChord === "vii°6/5" || prevChord === "vii°4/3" || prevChord === "vii°4/2")) {
		return true; //No triad after 7th
	}
	
	if ((newChord === "IV" || newChord === "ii6" || newChord === "ii6/5") && (prevChord === "viiø7" || prevChord === "V6/5")) {
		return true; //Prevent tritones in bass	
		
	}	
	if ((newChord === "iv" || newChord === "ii°6" || newChord === "iiø6/5") && (prevChord === "vii°7" || prevChord === "V6/5")) {
		return true; //Prevent tritones in bass	
		
	}
	
	if (newChord === "vii°6" && (prevChord === "V7" ||prevChord === "V6/5" || prevChord === "V4/3" || prevChord === "V4/2")) {
		return true; //No triad after 7th
	}
		//Move This function later on, remove from generatechordlist
	
	if (newChord === "I6" && (prevChord === "V6/5" ||prevChord === "V6")) {
		return true; //V6/5 or V6 cannot go to I6
	}	
	
	if (newChord === "I"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to I
	}	
	
	if (newChord === "i6" && (prevChord === "V6/5" ||prevChord === "V6")) {
		return true; //V6/5 or V6 cannot go to i6
	}	
	
	if (newChord === "i"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to i
	}
	
	if (newChord === "Cad6/4"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to Cad6/4
	}
	
	if (newChord === "Cad6/4(m)"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to Cad6/4
	}
	
	if (newChord === "V6/5"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to V6/5
	}
	
	if (newChord === "V4/2"  && prevChord === "V6/5") {
		return true; //V6/5 cannot go to V4/2
	}
	
	if (newChord === "V7"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to V7
	}
	
	if (newChord === "vii°7"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to V7
	}
	
	if (newChord === "viiø7"  && prevChord === "V4/2") {
		return true; //V4/2 cannot go to V7
	}
	
	if (newChord === "I6" && prevChord === "viiø7") {
		return true; //I6 cannot go to viiø7
	}
	
	if (newChord === "i6" && prevChord === "vii°7") {
		return true; //I6 cannot go to viiø7
	}	
	
	if ((newChord === "viiø7" || newChord === "viiø4/2") && prevChord === "I6") {
		return true; //viiø7 and viiø4/2 cannot go to I6
	}
	
	if ((newChord === "vii°7" || newChord === "vii°4/2") && prevChord === "i6") {
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
	
	if (newChord === "i6" && (prevChord === "vii°7" || prevChord === "vii°4/2")) {
		return true; //I6 cannot go to viiø7 and viiø4/2 
	}
	
	if (newChord === "i" && (prevChord === "vii°4/3" || prevChord === "vii°6/5" || prevChord === "vii°4/2")) {
		return true; //seven half-dim inversions cannot go to I
	}
	
	if ((newChord === "vii°4/3" || newChord === "vii°6/5" || newChord === "vii°4/2") && prevChord === "i") {
		return true; // I cannot go to seven half-dim inversions
	}
	
	if (newChord === "Cad6/4(m)" && prevChord ===  "vii°4/2") {
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
			
			if (i > 1 && chordNumber === chordList[i - 1] && chordNumber === chordList[i - 2] && chordNumber === chordList[i - 3]) {
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
		"major": {
			0: ["I", "I6", "iii", "vi"],
			1: ["IV", "IV6", "ii", "ii6", "ii6/5"],
			2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "viiø7", "viiø6/5", "viiø4/3", "viiø4/2"]
		},
		"minor": {
			0: ["i", "i6", "♭III", "♭VI"],
			1: ["iv", "iv6", "ii°6", "iiø6/5", "♭VII"],
			2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "vii°7", "vii°6/5", "vii°4/3", "vii°4/2"]
		},
		"major+": {
			0: ["I", "I6", "iii", "vi", "I+"],
			1: ["IV", "IV6", "ii", "ii6", "ii6/5", "♭II6", "It+6", "Fr+6", "III#", "VI#", "V/V", "V7/V", "V6/V", "V6/5/V", "V4/3/V", "V4/2/V", "V7/IV", "V6/5/IV", "V/ii", "V7/ii", "V6/ii", "V6/5/ii", "V4/3/ii", "V4/2/ii", "V/iii", "V7/iii", "V6/iii", "V6/5/iii", "V/vi", "V7/vi", "V6/vi", "V6/5/vi"],
			2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "viiø7", "viiø6/5", "viiø4/3", "viiø4/2", "V+"]
		},
		"minor+": {
			0: ["i", "i6", "♭III", "♭VI"],
			1: ["iv", "iv6", "ii°6", "iiø6/5", "♭VII", "♭II6", "It+6", "Fr+6", "V/V", "V7/V", "V6/V", "V6/5/V", "V4/3/V", "V4/2/V", "V/iv", "V7/iv", "V6/iv", "V6/5/iv", "V/♭III", "V7/♭III", "V6/♭III", "V6/5/♭III", "V/♭VII", "V7/♭VII", "V6/♭VII", "V6/5/♭VII"],
			2: ["V", "V7", "vii°6", "V6/5", "V4/3", "V4/2", "vii°7", "vii°6/5", "vii°4/3", "vii°4/2", "V+"]
		},
		
	}; //1 open
	
	var romanNumeralList = [];
	
	var allowedProgressions = { //declare progressions
					
        			"IV7": ["V", "V7"],
					"IV6/5": ["V6", "V6/5"],
					"iv7": ["V", "V7"],
					"iv6/5": ["V6", "V6/5"],
					"It+6": ["V"],
					"Fr+6": ["V"],
					"Ger+6": ["Cad6/4", "Cad6/4(m)"],
					"V/V": ["V", "V7"],
        			"V7/V": ["V", "V7"],
        			"V6/V": ["V", "V7"],
        			"V6/5/V": ["V", "V7"],
        			"V4/3/V": ["V", "V7","V6","V6/5"],
        			"V4/2/V": ["V6","V6/5"],
        			"V7/IV": ["IV"],
        			"V6/5/IV": ["IV"],
					"V/iv": ["iv"],
        			"V7/iv": ["iv"],
        			"V6/5/iv": ["iv"],
        			"V/ii": ["ii"],
        			"V7/ii":  ["ii"],
        			"V6/ii":  ["ii"],
        			"V6/5/ii":  ["ii"],
        			"V4/3/ii":  ["ii", "ii6", "ii6/5"],
        			"V4/2/ii": ["ii6", "ii6/5"],
        			"V/iii": ["iii"],
        			"V7/iii": ["iii"],
        			"V6/iii": ["iii"],
        			"V6/5/iii": ["iii"],
        			"V/vi": ["vi"],
        			"V7/vi": ["vi"],
        			"V6/vi": ["vi"],
        			"V6/5/vi": ["vi"],
					"V/♭III": ["♭III"],
					"V7/♭III": ["♭III"],
					"V6/♭III": ["♭III"],
					"V6/5/♭III": ["♭III"],
					"V/♭VII": ["♭VII"],
					"V7/♭VII": ["♭VII"],
					"V6/♭VII": ["♭VII"],
					"V6/5/♭VII": ["♭VII"],
    			};
	
	for (var i = 0; i < chordList.length; i++) {
		var num = chordList[i];
		var options = chordOptions[currentMode][num];
		var chosenRoman;
		
		if (i === 0) {
			chosenRoman = (currentMode === "major" || currentMode === "major+") ? "I" : "i"; // First chord is always root position tonic
			
		} else if (i === chordList.length -1) { //Chooses the final chord
			if (num === 0 ) {
				do {
			 		chosenRoman = Math.random() < 0.5 
						? ((currentMode === "major" || currentMode === "major+") ? "I" : "i") //If mode is major, choose I, if minor choose i
 						: ((currentMode === "major" || currentMode === "major+") ? "I6" : "i6");
					} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
			} else if (num === 2) {
				chosenRoman = "V"; 	//Final chord logic
			} else {
				do {
					chosenRoman = options[Math.floor(Math.random() * options.length)]; //Logic for other chords
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
			}
		} else if (i === 5 && num === 0) {
				do {
					chosenRoman = Math.random() < 0.3 
						? ((currentMode === "major" || currentMode === "major+") ? "Cad6/4" : "Cad6/4(m)")
						: options[Math.floor(Math.random() * options.length)];
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
			} else if (i === chordList.length - 2 && finalCadence [0] === 1) {
				do {
					chosenRoman = (currentMode === "major" || currentMode === "major+") ? "IV" : "iv"; //Ensures Plagal if penultimate is 1
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman)); 
				
			} else if (i === chordList.length - 2 && finalCadence[0] === 2) { // Looking at the second to last chord to ensure a proper cadence
				var dominantChords = ["V", "V7", "V6", "V6/5", "V4/3", "V4/2"];
				do {	
					chosenRoman = dominantChords[Math.floor(Math.random() * dominantChords.length)];
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman)); 
		} else if (i >= 1) {
        	// Check if the previous chord forces an challenge chord
        	var previousChord = romanNumeralList[i - 1];

        	if (allowedProgressions.hasOwnProperty(previousChord)) {
            	var forcedChords = allowedProgressions[previousChord];

				do { 
            		chosenRoman = forcedChords[Math.floor(Math.random() * forcedChords.length)];
				} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
        	} else {
            // If not a challenge chord, pick a random chord.
            	do {
                	chosenRoman = options[Math.floor(Math.random() * options.length)];
            	} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
        	}
    	} else {
        // Pick a random chord
        	do {
            	chosenRoman = options[Math.floor(Math.random() * options.length)];
        	} while (chordPrevention(romanNumeralList[i - 1], chosenRoman));
		}
  	romanNumeralList.push(chosenRoman);
	// Assigns 0, 1 and 2 to chords through map(), teturn line is choosing the specific chord.
	}
	
	if (romanNumeralList[5] == "Cad6/4" || romanNumeralList[5] === "Cad6/4(m)") {
		
		if ((currentMode === "major+" || currentMode === "minor+") && !(romanNumeralList[3] in allowedProgressions)) {
			if (Math.random() < 0.3) {
				romanNumeralList[4] = "Ger+6";
			}
		} //Ger+6 logic
			
		var seventhChord;
		do {
			seventhChord = ["V", "V7", "V4/2"][Math.floor(Math.random() * 3)];
		} while (chordPrevention(romanNumeralList[5], seventhChord));
		//7th chord is V, V7, or V4/2 if Cad6/4 is chosen
		var eighthChord;
		if (seventhChord === "V" || seventhChord === "V7") {
			do {
			eighthChord = Math.random() < 0.5 
				? ((currentMode === "major" || currentMode === "major+") ? "I" : "i")
 				: ((currentMode === "major" || currentMode === "major+") ? "I6" : "i6");
			} while (chordPrevention(romanNumeralList[6], eighthChord));
		} else if (seventhChord === "V4/2") {
			eighthChord = (currentMode === "major" || currentMode === "major+") ? "I6" : "i6";
		}
		
		romanNumeralList[6] = seventhChord;
		romanNumeralList[7] = eighthChord;
		
	} else if (romanNumeralList[5] in allowedProgressions) {
		romanNumeralList[6] = allowedProgressions[romanNumeralList[5]][Math.floor(Math.random() * allowedProgressions[romanNumeralList[5]].length)];
	
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
			for (var j = i + 1;  j < prevVoicing.length; j++) {//Check each voice pair (i and j)
			
				if (prevVoicing[i] > prevVoicing[j] && currentVoicing[i] < currentVoicing[j]) { // Voice i was higher than j, but is now lower
					return true; 
				}
			
				if (prevVoicing[i] < prevVoicing[j] && currentVoicing[i] > currentVoicing[j]) { // Voice i was lower than j, but is now higher
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
		
	 if (index === 0 && (chord === "I" || chord === "i")) {
        // First chord is one of these voicing options
        var firstChordOptions = (currentMode === "major" || currentMode === "major+")
            ? [
                [48, 60, 64, 67], // I (Major)
                [48, 64, 67, 72], // I6 (Major)
                [48, 67, 72, 76]  // I6/4 (Major)
            ]
            : (currentMode === "minor" || currentMode === "minor+")
                ? [
                    [48, 60, 63, 67], // i (Minor)
                    [48, 63, 67, 72], // i6 (Minor)
                    [48, 67, 72, 75]  // i6/4 (Minor)
                ]
                : [];

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
							!hasVCross(prevVoicing, currentVoicing) && //Removes voicings that cross
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
				midiList.push(closestVoicing); //Return the closest voicing
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