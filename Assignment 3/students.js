// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
  this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
  this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
  this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
  this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

/* This function sorts arrays using an arbitrary comparator. You pass it a comparator
and an array of objects appropriate for that comparator and it will return a new array
which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
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

/* A comparator takes two arguments and uses some algorithm to compare them. If the first
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator( int1, int2){
  if (int1 > int2){
      return true;
  } else {
      return false;
  }
}

/* For all comparators if students are 'tied' according to the comparison rules then the order of
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
  if (student1.yearInSchool >= student2.yearInSchool){
      return true;
  } else {
      return false;
  }
}

/* This compares two students based on their major. It should be case insensitive and
makes which are alphabetically earlier in the alphabet are "greater" than ones that
come later (from A-Z).*/
function majorComparator(student1, student2) {
  var major1 = student1.major.toUpperCase();
  var major2 = student2.major.toUpperCase();
  if (major1.localeCompare(major2) <= 0){
      return true;
  } else {
      return false;
  }
}

/* This compares two students based on the club they're in. The ordering from "greatest"
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed).
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
  var club1 = student1.club.toUpperCase();
  var club2 = student2.club.toUpperCase();
  switch (club1) {
    case "IMPROV":
      return true;
      break;

    case "CAT":
      if(club2.localeCompare("CAT") == 0 || club2.localeCompare("ART") == 0 || club2.localeCompare("GUITAR") == 0 || club2.localeCompare("KARATE") == 0 || club2.localeCompare("PHOTOGRAPHY") == 0){
        return true;
        break;
      }

    case "ART":
      if(club2.localeCompare("ART") == 0 || club2.localeCompare("GUITAR") == 0 || club2.localeCompare("KARATE") == 0 || club2.localeCompare("PHOTOGRAPHY") == 0){
        return true;
        break;
      }

    case "GUITAR":
      if(club2.localeCompare("GUITAR") == 0 || club2.localeCompare("KARATE") == 0 || club2.localeCompare("PHOTOGRAPHY") == 0){
        return true;
        break;
      }

    case "KARATE":
      if(club2.localeCompare("KARATE") == 0 || club2.localeCompare("PHOTOGRAPHY") == 0){
        if(student1.yearInSchool >= student2.yearInSchool){
          return true;
          break;
        }
      }

    case "PHOTOGRAPHY":
      if(club2.localeCompare("KARATE") == 0 || club2.localeCompare("PHOTOGRAPHY") == 0){
        if(student1.yearInSchool >= student2.yearInSchool){
          return true;
          break;
        }
      }

    default:
      return false;
  }
}

/* Second way to approach club comparator.
function clubComparator(student1, student2) {

    club1 = student1.club.toLowerCase();
    club2 = student2.club.toLowerCase();

    var clubOrder = ["improv", "cat", "art", "guitar"];

    if (club1 === club2) {
        return yearComparator(student1, student2);
    }
    else {
        for (var i = 0; i < clubOrder.length; i++) {
            if (club1 === clubOrder[i]) {
                return true;
            }
            else if (club2 === clubOrder[i]) {
                return false;
            }
        }
        return false;
    }
}
*/


// Create logMe function to print out the proper result
Student.prototype.logMe = function(bool) {
  if(bool){
    console.log(this.name + " - " + this.major + " - " + this.yearInSchool + " - " + this.club);
  }
  else{
    console.log(this.name + " - " + this.major + " - " + this.yearInSchool);
  }
};


// Create the printResult function to scan the object array and call logMe() to print out the result.
function printResult(array, ifClub){
  for(i = 0; i < array.length; i++){
    array[i].logMe(ifClub);
  }
}


// Get the result array and print out the proper output
console.log("**********");

console.log("The students sorted by year in school are:");
console.log("(Name - Major - Year) // of the \"greatest\" student");
var year_result = sortArr(yearComparator, students);
printResult(year_result, false);
console.log("(Name - Major - Year) // of the \"least\" student");
console.log("");

console.log("**********");
console.log("The students sorted by major are:");
console.log("(Name - Major - Year) // of the \"greatest\" student");
var major_result = sortArr(majorComparator, students);
printResult(major_result, false);
console.log("(Name - Major - Year) // of the \"least\" student");
console.log("");

console.log("**********");
console.log("The students sorted by club affiliation are:");
console.log("(Name - Major - Year - Club) // of the \"greatest\" student");
var club_result = sortArr(clubComparator, students);
printResult(club_result, true);
console.log("(Name - Major - Year - Club) // of the \"least\" student");
console.log("");

console.log("**********");
/* Your program should output the following to the console.log, including each of the opening and closing
5 stars. All values in parenthesis should be replaced with appropriate values. To accomplish this, you will
have to sort the array of students using each comparator and then loop through the array and and call logMe
on each student of the now-sorted array. If the argument is 'true' then it prints the student's name, major,
year in school, and club affiliation. If the argument is 'false' then the club affiliation is ommited and
just the student's name, major and year in school is logged. Please carefully note which sorted results require
the club to be displayed and which do not.

**********
The students sorted by year in school are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by major are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by club affiliation are:
(Name - Major - Year - Club) // of the "greatest" student
...
(Name - Major - Year - Club) // of the "least" student

**********

As an example of what is expected to be printed to the console with logMe being sent True for a single student:
Jim - Sports Science - 2 - Guitar

*/
