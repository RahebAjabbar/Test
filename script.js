/* here we learn java script

never miss a code */


/* about variable
start with letters , underscore , $
Var  anyWord = varibles value ;
document.getElementById (" id in HTML").innerHTML = anyWord ;
*/


/*
#Data Types
1- Boolean : if condition with TRUE and FALSE
2- Array : ["content", ]
3- Object : {firstName: "content", lastName: "content"}
4- String : "content"
5- Number : Value
6- undefined
7- NaN : Not a Number
8- Null
9- Symbol
*/


/*
var hasDiscount = false;
if (hasDiscount === true) {
   
	var mainPrice = 200;
} else {
    mainPrice = 225;
}

document.getElementById("boolean").innerHTML = mainPrice;

var socialWebsites = ["instagram", "telegram"];

document.getElementById("array").innerHTML = socialWebsites;

var myInfo = {firstName: "raheb",  lastName: "A.Jabbar"};

document.getElementById("object").innerHTML = myInfo.firstName;

var myName = "A.Jabbar"; // string //

document.getElementById("string").innerHTML = myName;

var myAge = 13 + 8;

document.getElementById("number").innerHTML = myAge;
*/


/*
#output
1- Alert = "string "  + number + " string"
2- document.write = using for testing the page
3- innerHTML = bring something from html file and change it to javascript
4- console.log = not shown on the page but using for catch errors in your coding
*/

/*
#operators
1- addition = sum
2- subtraction = minus
3- division = /
4- multi application = *
5- modulation = % (it give the residual of division number to number)
6- increment = var myCounter = number (ex;1)
                                                     alert (myCounter ++);
7- decrement = var myCounter = number (ex;1)	
                                                      alert (myCounter --);
													  
*/

/*
#if , else if, else =

var name of the variable = value of the variable;

if (name of variable   condition  value you want) {
output ("sentence will show if the condition is acheive");
} 
else if  (name of variable   condition 2  value you want) {
output (sentence will show if the condition is acheive");
}
else {
output (sentence will show if any conditions up isn,t acheive");
}
*/

/*
var productPrice = 300;

if (productPrice < 225) 
{console.log("it,s cheap");}
    
    else if (productPrice === 200)

    {alert("it,s possible"); }
	*/

/*var yourAge = prompt(" what,s your age");

if (yourAge > 18) {
	
    document.getElementById("condition").innerHTML = 
        "Sorry, I can,t allow you to access this page your age less than " + yourAge + " thank you for your corporation";
}

    else {
	    document.getElementById("condition").innerHTML =
		    " Welcom, are you sure you want it ? ";
    }
*/

/*
#Conditional operator
1- = assingment operator
2- == comparison operator (compare value only)
3- === identity operator (compare value and data type)
*/

/*
#Logical Operator
1- != Not eqaul (in value only)
2- !== not identical (in value and data type)
3- && (and) using when you have more than one condition you need to achieve all of them 
4- || (or) using when you have more than one condition and you have to achieve at least one of them.
*/

/*
#Function
function  anyWord (); {
"use strict" ;
var anyName = value ;

return anyName +- (any operator) number or word (anything you want) ;
}

var anyLetters = anyWord ();

any output = anyLetters (and anything youwant to insert) ;
*/

/*function simpleFunction() {
	
	"use strict";
	
	var myAge = 21;
	
	return 21 * 365 * 24 * 60;
}

var myAgeInMinutes = simpleFunction();

document.getElementById("hey").innerHTML = "Your age is " + myAgeInMinutes;
*/

/*
#Parameters

function anyWord(parameter you want) {

"use strict";
return parameter (any operators);
}

var anyName = anyWord (value of parameter);

document.getElementById("id").innerHTML =anyName ;

*/

/*
function dollarToIqDinar() {
	
	"use strict";
	
	var amount = document.getElementById("dollar").value,
		
		result = amount * 2,
	
	    message = document.getElementById("message");
	
	message.innerHTML = amount + "dollars worth " + result;
}
*/

/* 

#Switch, Case And Break

var -var name- = ex prompt ("your meassage to client")

switch (var name) {

case "anyword ":

ex alert ("your replay if the client write this word"):

break; (break is important.. can you remeber why ?)

etc..

defult:

ex alert ("your replay if the client write a word doesn,t exist in your cases")

break;
}

* you can specify one replay for two cases 

*/

/*
#Events

1- onclick = when you click it
2- ondblclick = when you double click
3- onload = when comletely load of the html page
4- onkeyup 
5- onkeydown
6- onkeypress
7- onmouseover = when the mouse move to the word
8- onmouseout + when the mouse move away of word
9- onchange
*/


/*
#Array

var Friends = [

"ali",
"ameer",
"mustafa",
"akeel",
"abood"
] ;

var anyName = Friends.indexOf("ameer", 5 );

console.log(anyName);

if (Array.isArray (Friends)) {
console.log ("seems good");
}
else {
console.log ("seems bad");
}
*/

/*
#Notes about array

1- add new item to array ? arrayname.push("item"); add to the last of list
                                           arrayname.unshift("item"); add to the first of the list
										   
2- add new item but in specific sort ? arrayname.splice(indexnum, num of items you wanna to delete {it could be 0}, item you wanna add);

3- delete item from array ? arrayname.pop(); delete from the last of list
                                            arrayname.shift(); delete from the first of the list
											
4- sort items by alphabet ? arrayname.sort();

5- sort items reverse the defult sort ? arrayname.reverse();

6- sort items reverse the alphabet ? arrayname.sort();
                                                         arrayname.reverse();
														 
7- print a specific range of array ? var anyname = arrayname.slice(num of start index, num of end index);

8- print a combine of many arrays ? var anyname = arrayname1.concat(arrayname2, arrayname3, etc..); 

9- know the index of any item ? var anyname = arrayname.indexOf("item name"); from start to end (value is repeated ? will give you the first one)
                                                                             arrayname.lastIndexOf("item name"); from end to start (value is repeated ? will give you the last one)
																			 
10- to know if this array or not ? if (Array.isArray(arrayname)) [

console.log ("this is array");
]
else [

console.log("this is not array");
]

11- know the numbers of array items ? console.log(arrayname.length);

12- set the the array items length ? arrayname.length = num value;
                                                        console.log (arrayname);
														
13- print the array as a string ? console.log(arrayname.toString());

14- print your local date ? var myDate = new date(),
                                                myString = myDate.tolocalString();
										        console.log(myString);
										 
15- choose a join you want between array's items ? console.log(arrayname.join(" any join you want "));								 
										   
*/

/*
#String

var stringName = "content of string";

console.log(stringName);
*Notes

1- length syntax of array is the same of string

2- convert the data type of number to string ? var anyName = num value,
                                                                                numToString = anyName.toString();
                                                                                console.log(numToString);

3- search about word in the string ? var
                                                               anyWord = "content of string"
															   anyWord2 = anyWord.indexOf("anyword in content");
													     console.log(anyWord2);
* the same for lastIndexOf

4- convert the data type of string to object[array] ? var anyWord = "content",
                                                                                        anyWord2 = anyWord.split
																						(" the value you wanna to use in split<it could be spaces between words, daches ..etc>", num of words splitted);
																				  console.log(anyWord2);
						
5- wanna to print a slice of string ? the same of array
* SubStr is similar to slice, but SubStr print num of letters when you detemine in the end point

6- wanna to replace word to another word ? var
                                                                           stringName = "content",
																		   afterReplace = stringName.Replace("word", "word you wanna to replace with it");
																	   console.log(afterReplace);
																	   
7- wanna to concat 2 strings ?  var
                                                       stringName1 = "content",
													   stringName2 = "content2",
													   allStrings = stringName.concat(" ", stringName2);
												 console.log(allStrings);

8- wanna to change between upper and lower case ? var
                                                                                         stringName1 = "content",
													                                     stringName2 = stringName.toUpperCase();
																				    console.log(stringName2);
																					
9- wanna to add a link ? var
                                            myLink = YouTube;
									   console.log("go to youtube by this link " + myLink.link(https://www.youtube.com));
							
*/

/*

#Loop (for)

var = example                                                                    var = plus                                                         #can you conact between loop and array ?!
for (start; condition; math operation)                                for (plus = 1; plus < 10; plus = plus + 1)
{output}                                                                            {output}

* do you remeber (for in loop, while, do while, break, continue)
*/

/*
#Math


                                                     var x = Math.Ceil(5.3); ========== 6
                                                     console.log(x);   
                                                up
1- wanna to approximation to
                                                down
											         var x = Math.Floor(5.3); ========== 5
                                                     console.log(x); 
													 
2- wanna to approximation by defult?   var x = Math.Round(5.3); ========== 5
                                                               console.log(x); 
															   
															   var x = Math.Round(5.5);=========== 6
                                                               console.log(x);
															   
3- wanna to get the min and max value ? var x = Math.min(many values); 
                                                                  console.log(x); 
															   
															      var x = Math.max(many values);
                                                                  console.log(x);
                                                      
*/

/*
#Regular Expression /letter/ attributes

A/attributes:
1- i (insensitive case)
2- g (global search)
3- m (multi line search)
 
 B/ Brackets
 1- [num range, capital letters range, small letter range]
 2- [^ not num range, not capital letters range, not small letter range]
 
 C/ Quantifiers
 1- letter {value of num}
 2- letter {value of num, value of num} --> num or num
 3- letter {value of num, } --> at least this num
 
*/

/*
#Date

1- wanna to print current date ? var theDate = new date();
                                                         console.log(theDate);
														 
2- wanna to print a specific date ? a- var theDate = new date("day name of month year hour:minute:seconds");
                                                                 console.log(theDate);	
																 
													   b- var theDate = new date(year, month(start form 0), day, hour, minute, seconds, millseconds);
                                                                 console.log(theDate);		
#Functions of date

1- getDate()
2- getDay()
3- getHours()
4- getFullYear()
5- getMinutes()
6- getSeconds()
7- getMilliSeconds()
8- getTimezoneOffset()
9- getTime()

* all of these functions add to the variable = new date function

* when you add UTC between (get) and (day, hours..etc) you will get the national time

* we use get when we ask and set when we insert
*/

/*
#Numbers

1- wanna to convert string to number ? parseInt

*/
