// Use this presets array inside your presetHandler
const presets = require('./presets');

// // Complete this function:
// const presetHandler = (string, arrayIndex, newPresetArray) => {
// 	let arrayToReturn = [];
// 	if(arrayIndex >= 0 && arrayIndex <= presets.length-1){
// 		if(string === 'GET'){
// 		   arrayToReturn[0] = 200;
// 		   arrayToReturn[1] = presets[arrayIndex];
// 		   return arrayToReturn;
// 	}   else if(string === 'PUT'){
// 		   presets[arrayIndex] = newPresetArray;
// 		   arrayToReturn[0] = 200;
// 		   arrayToReturn[1] = newPresetArray;
// 		   return arrayToReturn;

// 	}   else if(string !== 'GET' && string !== 'PUT'){
// 		   //BAD REQUEST
// 		   return [400];
// 	}

// 	}else{
// 		//NOT FOUND
// 		return [404];
// 	}
// };

// Complete this function:
const presetHandler = (string, arrayIndex, newPresetArray) => {
	let arrayToReturn = [];
	if(arrayIndex < 0 || arrayIndex > presets.length-1){
		return [404];
	}
		if(string === 'GET'){
		   arrayToReturn[0] = 200;
		   arrayToReturn[1] = presets[arrayIndex];
		   return arrayToReturn;
	}   else if(string === 'PUT'){
		   presets[arrayIndex] = newPresetArray;
		   arrayToReturn[0] = 200;
		   arrayToReturn[1] = newPresetArray;
		   return arrayToReturn;

	}   else if(string !== 'GET' && string !== 'PUT'){
		   //BAD REQUEST
		   return [400];
	}

	else{
		//NOT FOUND
		return [404];
	}
};





// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
