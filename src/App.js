
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button,FormText} from 'react-bootstrap';
// import StudentInfo1 from './compoents/Header/StudentInfo';
// import { useState,useEffect } from 'react';
import Login from './pages/login';
import Register from './pages/Register';
import {
RouterProvider,
Route,
createBrowserRouter,
 createRoutesFromElements
} from 'react-router-dom'
function App() {
const router = createBrowserRouter (
  createRoutesFromElements(
<Route>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Register' element={<Register/>}/>
</Route>
  )
);
return (
  <>
  <RouterProvider Route={router} />
  </>
)
}
//   //[Biến dữ liệu, setter funct]
// //npm i react-router-domnpm i react-router-dom cài router để giao diện
// const [count, setCount] = useState([0]);
// const [point, setPoint] = useState([0]);
// //sự kiện lắng nghe khi count thya doi gia tri
// useEffect(()=>{
//   console.log("new count", count);
// },[count]);

// useEffect(()=>{
//   console.log("new count", point);
// },[point]);
// useEffect(()=>{
//   console.log("new count 1 ===", count);
//   console.log("new point 1 ===", point);
// },[count, point]);

// useEffect(()=>{
// console.log("rendder thanh công");
// }, []);
//   const title = "React Js";
//   // const point = 6.5;
//   const pass = 'pass';
//   const fail = 'fail';
  
//    const Sutudent = [
//     {
//     code: "PC07028",
//     name: "Nguyễn Minh Phong",
//     address: "Cần Thơ",
//    },
//    {
//     code: "PC07028",
//     name: "Nguyễn Minh Phong",
//     address: {
//       city: "Cần Thơ"
//     }
//   }
  
//   ]

//   //map
// const minus = ()=>{
//   setCount(count - 1) // không cập nhật liền , có độ trễ
// }
// const plus = () =>{
//   // console.log("--------------");
//   // console.log("count = ", count);
//   const countTemp = count + 1
//   setCount(countTemp)
//  console.log("count====",countTemp);// không cập nhật liền , có độ trễ
// }


// const minusPoint = () => {
//   if(point < 10){
//     setPoint(point +1)
//   }
// }
// const plusPoint = () =>{
//   if(point < 10){
//     setPoint(point + 1)
//   }
// }

// const [sutudent, setStudent] = useState ({
//   name: "Nguyen Minh Phong",
//   code: "PC07028",
//   address: "Can Tho"
// });
// const changeName = () => {
//   setStudent({...sutudent, name: "Nguyen Van C"});
//   // const nameStudent = "Nguyen Van C";
//   // let nameNew = [...nameStudent]
// }
//   return (
//     <div className='container'>
//       <StudentInfo1 name={sutudent?.name}
//       code={sutudent?.code}
//       address={sutudent?.address}
//       changeName={changeName} />
//       {/* <button className='btn btn-primary' onClick={changeName}>{`Change name`}</button> */}
//       {/* //Tính điểm sinh viên */}
//       <h1>Point</h1>
//       <div className='row'>
//         <button className='btn btn-danger w-auto' onClick={minusPoint} >{`-`}</button>
//         <h1 className='text-primary w-auto'>{point}</h1>
//         <button className='btn btn-success w-auto' onClick={plusPoint}>{`+`}</button>
//         <h1 className='text-danger'>{point >= 5 ? pass : fail}</h1>
//       </div>

//       {/* Tăng Giảm */}
//       <div className='row'>
//         <button className='btn btn-danger w-auto' onClick={setCount.bind(this, count - 1)} >{`-`}</button>
//         <h1 className='text-primary w-auto'>{count}</h1>
//         <button className='btn btn-success w-auto' onClick={setCount.bind(this, count + 1)}>{`+`}</button>
//       </div>


//       {Sutudent?.map((value, index) => {
//         return <StudentInfo1 key={index} 
//         no= {index +1}
//         code= {value?.code}
//         name= {value?.name}
//         address= {value?.address?.city || value?.address || '-'}
//          />;
//       })}
//     </div>
//   );
  
// }
//   return (
//     <div className='container'>
//     <h1 className='text-danger'>{title}</h1>
//     <h1 className='text-danger'>{point >= 5 ? pass : fail}</h1>
//    {point >= 5 ? <h1 className='text-success'>{pass}</h1> : <h1 className='text-danger'>{fail}</h1>}
//    {point >= 5 && <h1>{pass}</h1>}
//    <h1 className={point >= 5 ? 'text-success': 'd-done'}>{pass}</h1>
//    <h1 className={`text-danger ${point >= 5 ? 'bg-primary': 'text-danger bg-success'}`}>{pass}</h1>
// <h1 className='text-danger' style={{backgroundColor: point >= 5 ? 'pink' : 'blue '}}>{pass}</h1>

//     <h3>code: {sutudent.code}</h3>
//     <h3>code: {sutudent.name}</h3>
//     <h3>code: {sutudent.address}</h3>
// {/* nối chũi  */}
//     <h3> {`code: ${sutudent.code}`}</h3>
//     <h3> {`code: ${sutudent.name}`}</h3>
//     <h3> {`code: ${sutudent.address}`}</h3>
// <div
//   className="table-responsive"
// >
//   <table
//     className="table table-primary"
//   >
//     <thead>
//       <tr>
//         <th scope="col">ID</th>
//         <th scope="col">code</th>
//         <th scope="col">name </th>
//         <th scope="col">address </th>
        
//       </tr>
//     </thead>
//     {/* <tbody>
//       {Sutudent.map((value, index)=>{
//         return (
//  <tr className='' key={index}>
//  <td>{index + 1}</td>
//  <td>{value.code}</td>
//  <td>{value.name}</td>
//  <td>{value?.address?.city || value?.address || '-'}</td>

// </tr>
//         )
//       })}
     
//     </tbody> */}
// //   </table>
// </div>

//     </div>
//   );
// }

export default App;
