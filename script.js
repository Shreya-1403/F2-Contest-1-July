/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(data=>{
    if(data.profession=="developer") 
    console.log(data)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(data => {
    if (data.profession == "developer")
      console.log(data)
  })
}


function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach(data=>{
    deleted=arr.filter(removeAdminVal)
    function removeAdminVal(data){
      if(data.profession != "admin")
       return data;
    }
  })
  console.log(deleted)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "harry", age: "19", profession: "actor" },
    { id: 5, name: "jk", age: "25", profession: "singer" },
    { id: 6, name: "min", age: "26", profession: "dancer" },
  ];
  let arr3 = arr.concat(arr2);
  console.log(arr3);
}
