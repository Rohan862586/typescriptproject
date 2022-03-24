
import React from 'react';
import './App.css';




// let a:string="hello";
// let a:any="hello";
// let a:string | number ="hello";


////////////////////////////////////////


// interface usersTyped{
//     name:string,
//     age:number,
//     address:any
// }

// let users:usersTyped={
//     name:'bruce',
//     age:30,
//     address:46
// }

// let users:any={
//     name:'bruce',
//     age:30,
//     address:46
// }


//////////////////////////////////////


// function users(data:string){
//     return data
// }
// users("rohan")




// function users(data:string  | number){
//     return data
// }
// users(45)




// function users(data:any){
//     return data
// }
// console.log({name:"rohan",age:40})



/////////////////////////////////////////////////


import { useState } from 'react';


// interface avs{
//   name:string;
//   age:number
// }


interface avs{
  name?:string;
  age?:number
}

function App() {

  const [count, setCount] = useState<avs>({
    name:'rohan',
    age:75
  })

  return (
    <div className="App">
      <h1>{count.name}</h1>
      <h1>{count.age}</h1>
    </div>
  );
}

export default App;





//////////////////////////////////////////////

// const Sum = (a:number, b:number) => {
//   return a + b
// }


// interface define {
//   a: number;
//   b: number;
// }

// const SumComponent = (props:define) => {
//   return <>{props.a + props.b}</>
// }


// interface define {
//   name?:string;
// }

// const Welcome = (props:define) => {
//   const {name} = props;
//   return (
//     <div>{name}</div>
//   )
// }


// function App() {

//   const [toggle, toggleButton] = useState(false);

//   // const val = Sum(4,7);

//   console.log(toggle)

//   return (
//     <div>
//       {/* <h1>{val}</h1> */}
//       {/* <SumComponent a={5} b={8} />  */}
//       {/* <Welcome name="rohan" /> */}
//       <input 
//       type="checkbox"
//       onClick={(event:any) => toggleButton(event.target.checked)}  />
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////////////////////////////


// interface userform {
//   name: string;
//   age: number | null;
// }

// const defaultformvalue = {
//   name:'',
//   age: null
// }
// function App() {

//   const [form, setForm] = useState<userform>(defaultformvalue)

//   return (
//     <div className="App">
//      <input type="text" name="name" value={form.name} onChange={(event:any) => setForm(event.target.value)} />
//     </div>
//   );
// }

// export default App;


////////////////////////////////////////////////////////////////////////////////



// interface Userform {
//   name?: string;
//   age?: number;
// }

// // const defaultformvalue = {
// //   name:'',
// //   age: 0
// // }

// function App() {

//   //  const [form, setForm] = useState<Userform>(defaultformvalue)
//   const [form, setForm] = useState<Userform>({})

//   const onChangeName = (event:any) => {
//     setForm({
//       ...form,
//       name: event.target.value
//     })
//   }

//   const onChangeAge = (event:any) => {
//     setForm({
//       ...form,
//       age: event.target.value
//     })
//   }

//   const submit = () => {
//     console.log("form", form)
//   }

//   return (
//     <div className="App">
//      <input type="text" name="name" value={form.name} onChange={onChangeName} />
//      <input type="text" name="age" value={form.age} onChange={onChangeAge} />
//      <button onClick={submit}>click</button>
//     </div>
//   );
// }

// export default App;



//////////////////////////////////////////////////////////////////////////////////////////////////



// import Component from './Component';
// import  { useEffect, useState } from 'react';



// // let defaultformvalue: {
// //   name: string;
// //   age: number;
// // }

// // defaultformvalue = {
// //   name:'',
// //   age: 0
// // }

// ///////////

// interface Userform {
//   name?: string;
//   age?: number;
// }

// const defaultformvalue = {
//   name:'',
//   age: 0
// }


// function App() {

//    const [form, setForm] = useState<Userform>(defaultformvalue)

//   return (
//     <div className="App">
//       <Component initialvalue={0}/>
//     </div>
//   );
// }

// export default App;






