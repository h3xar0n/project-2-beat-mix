// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const getDrumArrayName = (name) => 
{	
	switch(name){
		case 'kicks':
		 return kicks;
		case 'snares':
		 return snares;
		case 'hiHats':
		 return hiHats;
		case 'rideCymbals':
		 return rideCymbals;
		default:
		 return;
	}

};

const toggleDrum = (drumArrayName, indexNumber) => {
	const drums = getDrumArrayName(drumArrayName);
	if(!drums || indexNumber < 0 || indexNumber > 15){
	return;
}
	drums[indexNumber] = !drums[indexNumber];
};


// let toggleDrum = (drumName, indexNumber) => {
// 	if(drumName && (indexNumber >= 0 && indexNumber <= 15)){
// 	drumName[indexNumber] = !drumName[indexNumber];
// }
// };

const clear = (drumArrayName) =>{
	const drums = getDrumArrayName(drumArrayName);
	if(drums){
	//drumName.forEach(element => element = false);
	for(let i = 0; i < drums.length; i++){
	  drums[i] = false;
	}
}
};

//Problem was 

// let clear = (drumName) =>{
// 	if(drumName){
// 	//drumName.forEach(element => element = false);
// 	for(let i = 0; i < drumName.length; i++){
// 	  drumName[i] = false;
// 	}
// }
// };


const invert = (drumArrayName) =>{
	const drums = getDrumArrayName(drumArrayName);
	if(drums){
	//drumName.forEach(element => element = !element);
	for(let i = 0; i < drums.length; i++){
	  drums[i] = !drums[i];
	}
}
};


const getNeighborPads = (x, y, size) =>{
	//if out of range
	if((x < 0 || x > size-1) || (y < 0 || y > size-1)){
		return [];
	}
	//if in one of the corners
	else if(x === 0 && y === 0){
		return [[x+1, y], [x, y+1]];
	}
	else if(x === 0 && y === size-1){
		return [[x+1, y], [x, y-1]];
	}
	else if(x === size-1 && y === 0){
		return [[x-1, y], [x, y+1]];
	}
	else if(x === size-1 && y === size-1){
		return [[x-1, y], [x, y-1]];
	}
	//if on one of the edges
	else if(x === 0 && (y !== 0 && y !== size-1)){
		return [[x, y+1], [x, y-1], [x+1, y]];
	}
	else if(x === size-1 && (y !== 0 && y !== size-1)){
		return [[x, y+1], [x, y-1], [x-1, y]];
	}
	else if(y === 0 && (x !== 0 && x !== size-1)){
		return [[x-1, y], [x+1, y], [y+1, x]];
	}
	else if(y === size-1 && (x !== 0 && x !== size-1)){
		return [[x-1, y], [x+1, y], [x, y-1]];
	}
	//else, it is in the middle
	else{
		return [[x-1, y], [x+1, y], [x, y-1], [x, y+1]];
	}

};


// let invert = (drumName) =>{
// 	if(drumName){
// 	//drumName.forEach(element => element = !element);
// 	for(let i = 0; i < drumName.length; i++){
// 	  drumName[i] = !drumName[i];
// 	}
// }
// };

