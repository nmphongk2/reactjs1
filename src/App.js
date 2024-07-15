
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button,FormText} from 'react-bootstrap';
import StudentInfo1 from './compoents/Header/StudentInfo';
import { useState } from 'react';
function App() {
  //[Biến dữ liệu, setter funct]
const [count, setCount] = useState([0])
  const title = "React Js";
  // const point = 6.5;
  const pass = 'pass';
  const fail = 'fail';
  
   const Sutudent = [
    {
    code: "PC07028",
    name: "Nguyễn Minh Phong",
    address: "Cần Thơ",
   },
   {
    code: "PC07028",
    name: "Nguyễn Minh Phong",
    address: {
      city: "Cần Thơ"
    }
  }
  
  ]

  //map
const minus = ()=>{
  setCount(count -1) // không cập nhật liền , có độ trễ
}
const plus = () =>{
  console.log("--------------");
  console.log("count = ", count);
  const countTemp = count + 1
  setCount(countTemp)
 console.log("count====",countTemp);// không cập nhật liền , có độ trễ
}

const [point, setPoint]= useState(0);
const minusPoint = () => {
  if(point < 10){
    setPoint(point +1)
  }
}
const plusPoint = () =>{
  if(point < 10){
    setPoint(point + 1)
  }
}
  return (
    <div className='container'>
      {/* //Tính điểm sinh viên */}
      <h1>Point</h1>
      <div className='row'>
        <button className='btn btn-danger w-auto' onClick={minusPoint} >{`-`}</button>
        <h1 className='text-primary w-auto'>{count}</h1>
        <button className='btn btn-success w-auto' onClick={plusPoint}>{`+`}</button>
        <h1 className='text-danger'>{point >= 5 ? pass : fail}</h1>
      </div>

      {/* Tăng Giảm */}
      <div className='row'>
        <button className='btn btn-danger w-auto' onClick={setCount.bind(this, count - 1)} >{`-`}</button>
        <h1 className='text-primary w-auto'>{count}</h1>
        <button className='btn btn-success w-auto' onClick={setCount.bind(this, count + 1)}>{`+`}</button>
      </div>


      {Sutudent?.map((value, index) => {
        return <StudentInfo1 key={index} 
        no= {index +1}
        code= {value?.code}
        name= {value?.name}
        address= {value?.address?.city || value?.address || '-'}
         />;
      })}
    </div>
  );
  
}
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
    {/* <tbody>
      {Sutudent.map((value, index)=>{
        return (
 <tr className='' key={index}>
 <td>{index + 1}</td>
 <td>{value.code}</td>
 <td>{value.name}</td>
 <td>{value?.address?.city || value?.address || '-'}</td>

</tr>
        )
      })}
     
    </tbody> */}
//   </table>
// </div>

//     </div>
//   );
// }

export default App;
