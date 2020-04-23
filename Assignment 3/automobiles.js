
function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];


/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array){
    // Implemented Bubble Sort Algorithm
    var size = array.length - 1;
    var keeprun;
    var result = array;

    do {
      keeprun = false;
      for(var i = 0; i < size; i++) {
        if(!comparator(result[i], result[i+1])) {
          var temp = result[i];
          result[i] = result[i+1];
          result[i+1] = temp;
          keeprun = true;
        }
      }
    } while(keeprun);

    return result;
}


/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
  // auto1.logMe(true);
  // auto2.logMe(true);
  if (auto1.year >= auto2.year){
      return true;
  } else {
      return false;
  }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
  if (auto1.make.localeCompare(auto2.make) <= 0){
      return true;
  } else {
      return false;
  }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
  switch (auto1.type) {
    case "Roadster":
      return true;
      break;

    case "Pickup":
      if(auto2.type.localeCompare("Pickup") == 0 || auto2.type.localeCompare("SUV") == 0 || auto2.type.localeCompare("Wagon") == 0 || auto2.type.localeCompare("Sedan") == 0){
        return true;
        break;
      }

    case "SUV":
      if(auto2.type.localeCompare("SUV") == 0 || auto2.type.localeCompare("Wagon") == 0 || auto2.type.localeCompare("Sedan") == 0){
        return true;
        break;
      }

    case "Wagon":
      if(auto2.type.localeCompare("Wagon") == 0 || auto2.type.localeCompare("Sedan") == 0){
        return true;
        break;
      }

    case "Sedan":
      if(auto2.type.localeCompare("Sedan") == 0){
        return true;
        break;
      }

    default:
      return false;
  }
}

// Create logMe function to print out the proper result
Automobile.prototype.logMe = function(bool) {
  if(bool){
    console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
  }
  else{
    console.log(auto.year + " " + auto.make + " " + auto.model);
  }
};


// Create the printResult function to scan the object array and call logMe() to print out the result.
function printResult(array, ifClub){
  for(i = 0; i < array.length; i++){
    array[i].logMe(ifClub);
  }
}


// Get the result array and print out the proper output
console.log("*****");

console.log("The cars sorted by year are:");
console.log("(year make model of the 'greatest' car)");
var year_result = sortArr(yearComparator, automobiles);
printResult(year_result, true);
console.log("(year make model of the 'least' car)");
console.log("");

console.log("The cars sorted by make are:");
console.log("(year make model of the 'greatest' car)");
var make_result = sortArr(makeComparator, automobiles);
printResult(make_result, true);
console.log("(year make model of the 'least' car)");
console.log("");

console.log("The cars sorted by type are:");
console.log("(year make model of the 'greatest' car)");
var type_result = sortArr(typeComparator, automobiles);
printResult(type_result, true);
console.log("(year make model of the 'least' car)");

console.log("*****");
