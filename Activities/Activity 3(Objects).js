let obj = {here: {is: "an"}, object: 2};


function deepEqual(input1, input2){

	// Check if both of the inputs are objects and not null
	if((typeof input1 == "object" && input1 != null) && (typeof input2 == "object" && input2 != null)){

		// Check if two objects has the same properties length, if not, return false immediately
		if(Object.keys(input1).length != Object.keys(input2).length){
			return false;
		}

		// Loop through the object's properties
		for( element in input1){
			// Check if the corrent properties are both object type, if it is, then recursively call the deepEqual function to destructuring the object.
			if((typeof input1[element] == "object") && (typeof input2[element] == "object")){
				// Check if the return result of the current two object are true, if it is not, return false immediately
				if(!(deepEqual(input1[element], input2[element]))){
					return false;
				}
			}
			// Check if the current objects properties' values are the same, if it isn't, return false immediately
			else{
				if(input1[element] != input2[element]){
					return false;
				}

			}
		}
	}
  //Get into the value or null cases
	else{
		// Check if the values are the same, if it is not, return false immediately
		if (!(input1 === input2)){
			return false;
		}
	}

	return true;

}

console.log("**********************************************************************");

console.log("");
console.log("Testing case: deepEqual(null, null)");
console.log("Result: " + deepEqual(null, null));
console.log("");

console.log("Testing case: deepEqual(null, 1)");
console.log("Result: " + deepEqual(null, 1));
console.log("");

console.log("Testing case: deepEqual(88, 88)");
console.log("Result: " + deepEqual(88, 88));
console.log("");

console.log("Testing case: deepEqual(25, 96)");
console.log("Result: " + deepEqual(25, 96));
console.log("");

console.log("Testing case: deepEqual(12.34, 12.34)");
console.log("Result: " + deepEqual(12.34, 12.34));
console.log("");

console.log("Testing case: deepEqual(24.45, 76.98)");
console.log("Result: " + deepEqual(24.45, 76.98));
console.log("");

console.log("Testing case: deepEqual(\"Who is This\", \"Who is This\")");
console.log("Result: " + deepEqual("Who is This", "Who is This"));
console.log("");

console.log("Testing case: deepEqual(\"Who is Jim\", \"Who is Rose\")");
console.log("Result: " + deepEqual("Who is Jim", "Who is Rose"));
console.log("");

console.log("var obj = {here: {is: \"an\"}, object: 2}");
console.log("");

console.log("Testing case: deepEqual(obj, obj)");
console.log("Result: " + deepEqual(obj, obj));
console.log("");

console.log("Testing case: deepEqual(obj, {here: 1, object: 2})");
console.log("Result: " + deepEqual(obj, {here: 1, object: 2}));
console.log("");

console.log("Testing case: deepEqual(obj, {here: {is: \"an\"}, object: 2})");
console.log("Result: " + deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log("");

console.log("**********************************************************************");
