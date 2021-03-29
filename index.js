//let students = ["Ali", "Wali", "Junaid"];
//let searchedstudent = students.find(findali);
//let searchedstudent = students.findIndex(findali);
//students.sort();
//students.splice(1, 0, "waseem", "Haleem");
//console.log(students);

//console.log(searchedstudent);
//students.sort(customsort);

//function findali(std) {
// if (std == "Ali") return true;
//  else return false;
//}

//function customsort(a, b) {
// if (b > a) return -1;
// else return 1;
//}

function test(name) {
  if (name == "Ali") return true;
  else return false;
}
console.log(test("Ali"));

let testa = (name) => (name == "Ali" ? true : false);
console.log(testa("Alis"));
