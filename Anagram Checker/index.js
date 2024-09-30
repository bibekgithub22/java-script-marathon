let str = "Bibek.jpg"; //original string
console.log(str);

// toLowerCase = convert a string to lower case :  B=>b
const splitStr = str.toLowerCase().split("."); //split(): string to array conversion\\    ("$") "$" is the delimeter
console.log(splitStr);

const sortArr = splitStr.sort(); // sort array in alphabethical order
console.log(sortArr);

const res = sortArr.join(""); // convert array to a string    ("$") "$" is the delimeter
console.log(res);
