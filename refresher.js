const person = {
    name: "osama" , 
    age: 23 ,
    greet(){
       console.log("h ,i am ," + this.name ) ;
    }
};


// const hobbies = ["sports" , "cooking"];
// const copiedArrays = hobbies.slice() slice coppied the array with in a specific range or all array
// const copiedArray = [hobbies]; array inside an array (nested array)

//spread operator: is a three dot ...  infront of an array or an object
//they take the array and callout all the elements of array or properties of an object
//and put into what rounds the operator
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const copiedPerson ={...person};
// console.log(copiedPerson);

// //rest operator: is the opposet of the spread operator
// //takes all arguement sent when invoking the function no matter how many we send
// //put them in an array for us
// const toArray = (...args) => {
//     return args;
// };
// console.log(toArray(1 ,2 ,3 , 4))

//object destructuring : add curly braces in the argument list then 
//we specify the property of the ibject that we are interested in

// const printName = ({name}) => {
//     console.log(name);
// }
// printName(person);
// //creates 2 vars that stores the name and age of the object
// //they have to match the property names from person object
// const {name , age} = person;
// console.log(name,age);
// //can also destrcuture arrays and can choose any name
// const [ hobby1 , hobby2 ] = hobbies;
// console.log(hobby1 , hobby2);


//async code : takes time to execute (callback function inside the timeout)
// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Done!');
//       }, 1500);
//     });
//     return promise;
//   };
  
//   setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData()
//       .then(text => {
//         console.log(text);
//         return fetchData();
//       })
//       .then(text2 => {
//         console.log(text2);
//       });
//   }, 2000);
  
//   console.log('Hello!');
//   console.log('Hi!');
  

