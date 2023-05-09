
console.log('Hello Murik')
// in-line comment
var myName = 'Murad'; 
myName = 8;
const pi = 3.14;
console.log(myName);

// Variable basic math 
var a = 5;
var b = 10;
var c = " I am a "

a = a + 1;
b = b + 5;
c = c + "string!";

console.log(a+b+c);

var count = 48 - 9;
console.log(count)

var multiply = 8 * 8;
multiply--;
console.log(multiply);

//Decimals
var ourDecimal = 5.9;
var mydecimal = 0.01111

var ZaZa
ZaZa = ourDecimal + mydecimal;
console.log(ZaZa);

// Remainder 
var remainder;
remainder = 11 % 3.5;
console.log(remainder);

// Assignment shortcuts

var q = 4;
var w = 6;
var e = 12;
var r = 5

q -= 12;
w *= 8;
e /= 9;
r += 0.5;
console.log(q+w+e+r);

var myFirstNameIs = "Murik";
var myLastNameIs = "Abasov";

console.log(myFirstNameIs +" "+ myLastNameIs);

//abbreviation
var abbrev = 'INTERNATIONAL Monetary Fund'.match(/\b([A-Z])/g).join('');

console.log(abbrev);

//double quotes string: use single ' to use double quotes, use backtick `to use single qoute

var myString  = `'I am a "double qouted" string inside "double quotes"'`
console.log(myString)

var myStr = "firstline\n\t\\secondline\nthirdline";
console.log(myStr)

// combining two string into one (plusEquals operator)
var mystrin = "This is the first sentence. ";
mystrin += "this is the second sentence";
console.log(mystrin);

//Constructing string with variables

var maName = "Murad";
var nameS = " Hello, my name is " + maName + ", nice to meet you!";
console.log(nameS);

//appending variables to strings
var someLanguage = " \n\tJavaScript"
var additionStr = 'I love learning'
additionStr += someLanguage;
console.log(additionStr);

//Find Lenght of a string
var firtNameLenght = 0;
var firstName = "Murik";
firtNameLenght = firstName.length
console.log(firtNameLenght)

//Bracket Notation (find the  Nth letter)
var firstLetterofName = "";
var lastName = "Abasov";
firstLetterofName = lastName[0];
console.log(firstLetterofName);

// String Immutability
var replaceLetter = "Wow wow";
replaceLetter = "Bow Wow"; //fix me
console.log(replaceLetter)

// Find last (or any other) letter in the string
var firstName = "MuradiK"
var lastLetterofFirstName = firstName[firstName.length - 1];
console.log(lastLetterofFirstName);

// built Word Blanks game 
function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result ="";
    result += "The " + myAdjective + ' ' + myNoun + ' ' + myVerb + " to the park" + ' ' + myAdverb;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("boy", "small", "biked", "slowly"));

//ARRAY
var myArray = [ "Murad-test", 33, 44,] 
var myData = myArray[0]; //equals 33
console.log(myData);

//Modify Array data
var myArray = [ "Murad", 33, 44,] 
var myData = myArray;
myArray[0] = "New Word";
myArray[1] = 78
console.log(myData);

//Access multi-dimensional array
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray [3][0][1];
console.log(myData);

//Push () - adds to the end of array
var myArray = [["Murad"], ["Abasov", 27]];
myArray.push(["Aquarius", 1, 1990]);
console.log(myArray);

//pop() - remove last item in array
var popArray = [1,2,3];
var removeLastFromArray = popArray.pop();
console.log(popArray);

//shift() - remove first item in array
var shiftArray = [1,2,3,4,5];
var removeFirstFromArray = shiftArray.shift();
console.log(shiftArray);

//unshift() - adds to the beginning of the array
var ourArray = ["Deep", "Wide", "Ocean"];
ourArray.shift();
ourArray.unshift("Blue");
console.log(ourArray);

// Shopping list array
var myList = [['cereal', 3],['milk', 2], ['bananas', 5], ['juice', 1], ['bread', 2]]
console.log(myList)

// Reusable function
function myReusableFunction() {
    console.log(shiftArray);
}
myReusableFunction();
myReusableFunction();

//Arguments
function myFunctionwithArgs(a, b, c) {
    console.log(a - b * 8 + c);
}

myFunctionwithArgs(10, 5, 11);


//Global Scope
var myGlobal = 101;

function ffun1() {
    //assign 5 to oopsGlobal here

 oopsGlobal = 5;
}

function ffun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
ffun1();
ffun2();

//global & local variable
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "jacket"; 
    return outerWear
}
console.log(myOutfit());
console.log(outerWear);

// return a value from a function
function minusEight(num) {
    return num - 8;
}
console.log(minusEight(11));

function timeFive(num) {
    return num * 5;
}
console.log(timeFive(6));

//Undefined value returned
var sum = 1;
function addThree(sum) {
   sum += 3;
}
log2 = addThree(sum)
console.log(log2)

//Assignment with Returned value

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed)

// Stand in Line
function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: "+ JSON.stringify(testArr));

//Boolean values
function welcomeToBooleans() {
    return false;
}
log1 = welcomeToBooleans()
console.log(log1)

// IF statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's False";
}

console.log(ourTrueOrFalse(true));

//Equility operator
function testEqual(val) {
    if (val == 12){
        return "Equal" 
    };
    return "Not Equal"
}
console.log(testEqual(10));

// Two IF operators
function testMoreLessl(val) {
    if (val <= 50) {
        if (val >= 25) { 
        return "In the range" 
        }
    };
    return "Not in the range"
}
console.log(testMoreLessl(27));

// And / OR Operators
function testAndOr(val) {
    if (val <= 50 && val >= 25) { 
        return "Yes, More than 25 and Less Than 50"  
    };
    return "No"
}
console.log(testAndOr(27));

//Comparisons with the Logical Or Operator
function testLogicalOr (val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside"
    }
console.log(testLogicalOr(21));

//ELSE Statements
function testElse(val) {
    var result = '';
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(9));

//Else If Statement

function testElseIF (val) {
    if (val >10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5"
    } else {
        return "Between 10 and 5";
    }
}
console.log(testElseIF(7));

//Logical Order of values is important in 'Else If' Statement


// Chaining Else If Statements 
function testSize (num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num <20) {
        return "Large"
    } else { (num >= 20) 
         return "Huge"
    }
}
console.log(testSize(17));