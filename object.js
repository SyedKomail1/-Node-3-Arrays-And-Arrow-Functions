let address = {
  title: "Liberty Market",
  location: "Lahore",
};
function printaddress(title, location) {
  console.log(title + " is located in " + location);
}

const { title, location } = address;
printaddress(title, location);
