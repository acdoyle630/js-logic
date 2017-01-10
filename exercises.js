/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
var today = new Date();

if(today === "Friday"){
  console.log("Let's Party!");
}

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

if(today === "Friday"){
  console.log("Let's Party!");
}else{
  console.log("Get back to coding!");
}


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

function canVote (age) {
  if (age >= 18){
    return true;
  } 
}
console.log(canVote(18));

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/
function login (password) {
  if (password === 'test1234') {
    return 'login successful!';
  } else {
    return 'denied';
  }
}
var loginAttempt = login ('test1234');
console.log (loginAttempt);
/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/
function isGreaterThan (first, second){
  if ( first > second ){
    return true;
  } else {
    return false;
  }
}
var greaterThan = isGreaterThan(10, 2);
console.log (greaterThan);
/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/
function mustBeTrue (boo) {
  if (boo ==='boo') {
    return true;
  }
}
var ghost = mustBeTrue ('boo');
console.log (ghost);

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/
function bigBird (str) {
  if (str.length === 3) {
    return "Word to The Bird";
  }
}
console.log (bigBird('yes'));

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/
function isEqual (first, second) {
  if (first.length === second.length) {
    return "YOu look mahvelous!";
  } else {
    return  "I don't know who you are anymore";
  }
}
console.log (isEqual('faat', 'cat'));
/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/
 
 function notEqual (first, second) {
  if (first !== second){
    return 'Opposites do not attact';
  } else {
    return "cause it's like you're my mirror";
  }
 }
 console.log (notEqual('first', 'first'));

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 
function spareChange ( money ){
  if (money >100) {
    return true;
  } else {
    return false;
  }
}
var enoughMoney = spareChange(99);
console.log (enoughMoney);

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 
function dirty30( num1, num2, num3) {
  if (num1 + num2 + num3 > 30) {
    return true;
  } else {
    return false;
  }
}
console.log (dirty30(1,2,3));

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 
function evenStevens (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
var evenOrOdd = evenStevens( 13 );
console.log (evenOrOdd);
/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 
 function daClub (cover, age) {
  if (cover >= 21 && age >= 21 ) {
    return "welcome to the legends lounge.";
  } else {
    return "Chuck E Cheese is across the street.";
  }
 }
console.log(daClub (19, 34));
/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 

function graduation (credits, thesis) {
  if (credits >= 120 || thesis === true) {
    return  "Congratulations on a job well done.";
  } else {
    return 'see you in summer school.';
  }
}
var didGraduate = graduation (119, false);
console.log (didGraduate);
/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 
function moneyTrain (speed) {
  if (speed < 50 ) {
    return  "You are riding Honolulu's Rail.";
  } else if (speed >= 50 && speed < 100) {
    return "YOu are riding an Amtrak";
  } else if  (speed >= 100) {
    return 'now you ballin in the Shinkansen!';
  }
}
console.log (moneyTrain (200));
/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 
  var budget = 100;
  var price = 5;
  var bought = 0;

function buyDoughnut () {
  if (budget >= price) {
    budget -= price;
    bought ++;
  }
}
buyDoughnut ();
console.log (budget);
buyDoughnut ();
console.log (budget);

//needs work 
//needs work


/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

var players = ['michael Jorday', 'Scottie Pippen', 'Dennis Rodman', 'Steve Kerr', 'Luc Longley'];
for (var i =0; i<5; i++) {
  console.log ('bulls ' + players [i]);
}
/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];
for (var i=0; i<7; i++) {
  console.log (myFavFoods [i]);
}

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/
var sum = [1, 2, 3, 8, 4].reduce (add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); 
/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

  var players = ["LeBron", "Linsanity", "Kawhi", "Kobe", "Yao Ming", "Bird", "Jordan"];
  var east = [];
  var west = [];
  
  function allStars (ballers) {
  for ( var i=0; i<7; i++ ) {
    if (i % 2 === 0 ) {
      east.push ( ballers [i]);
    } else {
      west.push ( ballers [i]);
    } 
  }
  }
  
  allStars (players);
  console.log (east);
  console.log (west);
 
/*

 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

 var subOfTheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

function subways (special) {
  for (var i=0; i<special.length; i++) {
    if (i % 2 === 1) {
      special [i] = 'tuna';
    }
  } return special;
}

console.log (subways(subOfTheDay));
/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

  var phrase = "An apple a day keeps Alice feeling awesome!";
  










