/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(person => {
    if(person.profession==="developer"){
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(performance =>{
    if(person.profession==="developers"){
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newPerson = { id: 4, name: "deepak", age: "26", profession: "developer"};
  arr.push(newPerson);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArr = arr.filter(person=> person.profession !=="admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "Asteve", age: "25", profession: "designer"};
    { id: 6, name: "Akki", age: "32", profession: "developer" };
  ];
  let concatenatedArray = arr.concat(newArr);
  console.log(concatenateArray);

}