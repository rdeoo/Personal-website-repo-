const courseList = [
  { code: "ACIT 1620", coursename: "Web Fundamental Technologies" },
  { code: "COMM 1116", name: "Buisness Communications 1" },
  { code: "ACIT 1515", name: "Scripting for IT" },
];


let validator = false
let usercourse;
while (!validator)
{
  usercourse = prompt("Please enter a 4 digit number - e.g. 1620: ");
  if (usercourse.length === 4 && !isNaN(usercourse)){validator = true}
}


// = prompt("Please enter a 4 digit number - e.g. 1620: ");
// while (isNaN(usercourse) || usercourse.length !== 4) {
//   prompt("Error. Please enter a number: ");

