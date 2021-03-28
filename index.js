let students = ["Ali", "56", "Junaid"];
//let searchedstudent = students.find(findali);
let searchedstudent = students.findIndex(findali);

console.log(searchedstudent);
//console.log(searchedstudent);

function findali(std) {
  if (std == "Ali") return true;
  else return false;
}
