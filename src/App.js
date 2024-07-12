
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,FormText} from 'react-bootstrap'
function App() {

  const title = "React Js";
  const point = 6.5;
  const pass = 'pass';
  const fail = 'fail';
  
   const sutudent = [
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
  return (
    <div className='container'>
    <h1 className='text-danger'>{title}</h1>
    <h1 className='text-danger'>{point >= 5 ? pass : fail}</h1>
   {point >= 5 ? <h1 className='text-success'>{pass}</h1> : <h1 className='text-danger'>{fail}</h1>}
   {point >= 5 && <h1>{pass}</h1>}
   <h1 className={point >= 5 ? 'text-success': 'd-done'}>{pass}</h1>
   <h1 className={`text-danger ${point >= 5 ? 'bg-primary': 'text-danger bg-success'}`}>{pass}</h1>
<h1 className='text-danger' style={{backgroundColor: point >= 5 ? 'pink' : 'blue '}}>{pass}</h1>

    <h3>code: {sutudent.code}</h3>
    <h3>code: {sutudent.name}</h3>
    <h3>code: {sutudent.address}</h3>
{/* nối chũi  */}
    <h3> {`code: ${sutudent.code}`}</h3>
    <h3> {`code: ${sutudent.name}`}</h3>
    <h3> {`code: ${sutudent.address}`}</h3>
<div
  className="table-responsive"
>
  <table
    className="table table-primary"
  >
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">code</th>
        <th scope="col">name </th>
        <th scope="col">address </th>
        
      </tr>
    </thead>
    <tbody>
      {sutudent.map((value, index)=>{
        return (
 <tr className='' key={index}>
 <td>{index + 1}</td>
 <td>{value.code}</td>
 <td>{value.name}</td>
 <td>{value?.address?.city || value?.address || '-'}</td>

</tr>
        )
      })}
     
    </tbody>
  </table>
</div>

    </div>
  );
}

export default App;
