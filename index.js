console.log(`--------------------------
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
*Do not use numbers to reference the last element, find it programmatically.
*ages[7] - ages[0] is not allowed!
b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
c. Use a loop to iterate through the array and calculate the average age. \n`);

/*
 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
 
 The array "ages" is declared by square brackets, and the values are defined inside.*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

/*
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!

The last element of the array is subtracted from the first element of the array programatically by using the last position in the array (defined by [ages.length-1]). Then the array is logged in the console.
*/

let subtract = ages[ages.length-1] - ages[0]
console.log(subtract)

/* Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

I am adding the element 35 to the end of the array using the push function. Then I am recalculating the equation with the new element.*/

ages.push(35)
let subtract2 = ages[ages.length-1] - ages[0]
console.log(subtract2)

/*Use a loop to iterate through the array and calculate the average age.

Here I created a loop that loops through the array under the condition that the "i" is less than or equal to the last position in the array. Under these conditions, the function will add the next value in the array each iteration until the conditions are met. Then it will log the total and divide it by the total number of values in the array to calculate the average value of the array.
*/

let total = 0
for(let i = 0 ; i<=(ages.length)-1;i++){
    total = total + ages[i]
}

console.log(total/ages.length)

console.log(`--------------------------
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
a. Use a loop to iterate through the array and calculate the average number of letters per name.
b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.\n`);

//I created the array names and added th value to the array inside the square brackets.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

/*Use a loop to iterate through the array and calculate the average number of letters per name.

In the loop below I did the same thing as above except to calculate for average letters by using the "length" function to calculate how many letters are in each string.
*/

let totalLetters = 0
for(let i = 0; i<=names.length-1; i++){
    totalLetters = names[i].length + totalLetters
}

let averageLetters = totalLetters/(names.length-1)

console.log(averageLetters)

/*Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

The same loop is below, but with the concatenate function (+) that goes through the array and combines each string in the array
*/

let combinedNames = ""
for(let i = 0; i<=names.length-1; i++){
    combinedNames = combinedNames + " " + names[i];
}

console.log(combinedNames)

console.log(`--------------------------
3. How do you access the last element of any array?\n`);

console.log(`You reference the array name then use the dot function ".length" then subtract 1. This will look like:
[ages.length-1]`)

console.log(`--------------------------
4. How do you access the first element of any array?\n`);

console.log(`You reference the array name then use brackets and type the index "0". This will look like:
ages[0]`)

console.log(`--------------------------
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.\n`);

/*Here I created a new array (nameLengths) with the square brackets and created a loop to run through the elements in the array and each iteration the length of each string element from the previous array "names" is calculated using "length" fucntion, then pushed onto the nameLengths array using "push" and then each string length (recorded in array) is printed to the console */

let nameLengths = [];
for (let i=0; i<=[names.length-1]; i++){
    nameLengths.push(names[i].length);
    console.log(nameLengths[i]);
    
}


console.log(`--------------------------
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.\n`);

/*Here the sum of all the elements in the array is calculated by once again looping through the array and each time adding the index object to the previous objects and assigning it to the sum lengths variable. */

let sumLengths = 0;
for (let i=0; i<=[nameLengths.length-1]; i++){
    sumLengths = nameLengths[i] + sumLengths;
}
console.log(sumLengths);

console.log(`--------------------------
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').\n`);

/*In this function, the function is defined as "thisFunction" with the parameters of "word" and "n". Inside the function, there is a for loop that will continue performing the loop as long as the condition of "i" being less than the "n" parameter is met. The fucntion will then run and add the parameter "word" to itself with each iteration. Then "result" is returned once the loop completes.
I tested this by passing the string "Hello" as the "word" parameter and the "n" as 3, so that it would add the word to itself 3 times.*/

let result = 0
function thisFunction(word, n){
    let result = ""
    for(let i = 0; i < n ; i++){
        result = result + word;
    }
    
    return result
}

let word = "Hello";
let n = 3;
console.log(thisFunction(word, n));


console.log(`--------------------------
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.\n`);

/*In this function "fullName" the parameters of firstName and lastName are passed into the function to concatenate these parameters together to produce the "fullName". It returns the "fullName" after concatenation. The it is logged into the console by calling the function and using the defined variables of "Sergio" and "Perez". */

let firstName = "Sergio";
let lastName = "Perez";

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName
}
console.log(fullName(firstName, lastName));



console.log(`--------------------------
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.\n`);

/*In this function named "calculate" the parameter is an "array". Inside the fucntion, a for loop is ran where if "i" is ;ess than or equal to the last index position in the array, the loop continues to run by incrementing. Inside the function, the array adds all the indices inside the array, then IF the total value of the array indicies is greater than or equal to 100, the function returns "true". 

Then finally, the console will log true if the function "calculate" that passes the array "ages" into the array parameter is greater than 100 in value.*/

let totalValue = 0;

function calculate(array){
    for (i=0; i<=[array.length-1]; i++){
        totalValue = array[i] + totalValue;
        if(totalValue >= 100){
            return true;
        }
    }
}
    
console.log(calculate(ages))

console.log(`--------------------------
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.\n`);

/*This function also uses an array as the parameter and uses a for loop to loop through each index. It adds the indices togther through each loop. Once the loop is done, the average value of all of the elements of the array is calculated by taking the "initialValue" produced by the loop and dividing it by the last position in the array (thus the total amount of values contained in the array). Finally, the average value is returned from this equation. 
I then logged the value by running that calculateAverages function and passing in the "ages" array as the parameter. */

let initialValue = 0;
let averageValue = 0;

function calculateAverage(array){
    for (i=0; i<=[array.length-1]; i++){
        initialValue = array[i] + initialValue;
    }
    averageValue = initialValue/[array.length-1]
    return averageValue
}

console.log(calculateAverage(ages));

console.log(`--------------------------
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.\n`);

/*I initialized an array called "luckyNumbers" and added some values inside the square brackets. Then I created the function "compareArray" with 2 parameters. I put a loop inside that loops through the array and adds each index together. Once the loop is done, the average value is calculated the same way as above.
I replicated the loop for a second array and produced an average equation for the second array.
Then, I created an IF statement that says if the average value of the first array is greater than the average value of the secon array, then it will return a value of  TRUE. If this is not true, it will return FALSE.
I then logged this to the console by running the function "compareArray" and passed in the arrays of "ages" and "luckyNumbers" as the parameters.*/

let luckyNumbers = [15, 4, 25, 64, 5, 99, 33, 39]

function compareArray(array1, array2){
    let initialValue2 = 0;
    let averageValue2 = 0;

    for (i=0; i<=[array1.length-1]; i++){
        initialValue2 = array1[i] + initialValue2;
    }
    averageValue2 = initialValue2/[array1.length-1]


    let initialValue3 = 0;
    let averageValue3 = 0;
    for (i=0; i<=[array2.length-1]; i++){
        initialValue3 = array2[i] + initialValue3;
    }
    averageValue3 = initialValue3/[array2.length-1]

    if (averageValue2 > averageValue3){
        return true;
    }

    return false;
}

console.log(compareArray(ages, luckyNumbers))

console.log(`--------------------------
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.\n`);

/*In this fucntion I created an if statement saying if isHotOutisde is TRUE AND moneyInPocket is greater than or equal to 10.50, a value of TRUE will be returned. If these conditions are not met, then it returns FALSE. I then logged it to the console with the arguements TRUE and 20 passed into the parameters of the function willBuyDrink. */

let isHotOutside = true;
let moneyInPocket = 20;

function willBuyDrink(isHotOutside, moneyInPocket){    
    if(isHotOutside == true && moneyInPocket >= 10.50){
        return true;        
    }

    return false;
}
    console.log(willBuyDrink(isHotOutside, moneyInPocket));