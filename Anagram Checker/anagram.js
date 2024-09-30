// to check whether two srings are anagrams or not

const str1="BELOW";
const str2="elbow";

console.log("\nString 1 {", str1 ,"}");
console.log("String 2 {", str2 ,"} \n" );

//1. lowercase then convert string to array

const arr1=str1.toLowerCase().split("");
const arr2=str2.toLowerCase().split("");

//2. sort the array

const sortedArr1 = arr1.sort();
const sortedArr2 = arr2.sort();

//3. convert the array to string

const finalStr1 = sortedArr1.join("");
const finalStr2 = sortedArr2.join("");
 
console.log("Final String 1 :",finalStr1);
console.log("Final String 2 :",finalStr2,"\n");


//check for same string
if (finalStr1==finalStr2){
    console.log("Anagram Checker : (True)✓")
}
else{
    console.log("Anagram Checker : (False)✘")
}