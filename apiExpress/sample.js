const data = [
  {
    id: 1,
    name: "harini",
    age: 25,
  },
  {
    id: 2,
    name: "dinesh",
    age: 30,
  },
];

//transforms into a new array
const mapAge1 = data.map((res) => {
  //   console.log("response: " + JSON.stringify(res));
  return { ...res, name: "dinesharini" };
  //   if (res.id == 1) {
  //     return { ...res, id: 4, name: "Dinesh" };
  //   } else {
  //     return res;
  //   }
});
console.log("map result", mapAge1);

//filter condition based loop method
const filterAge1 = data.filter((ade) => ade.id == 1);

// console.log("filter result", filterAge1);

const findAge1 = data.find((res) => res.name == "john");

// console.log("find result", findAge1);
