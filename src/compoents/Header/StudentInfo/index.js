import React from 'react';

function StudentInfo() {

}
//  function sum(a,b){
//     return a + b
//  }


//Arrow function
const StudentInfo1 = ({
    no = '_',
    code= '_', 
    name= '_',
    address= '_',
}) => {
   
      return ( <div className='mb-3' >
        <h4>{`No.: ${no}`}</h4>
        <h4>{`Code: ${code}`}</h4>
        <h4>{`Name: ${name}`}</h4>
        <h4>{`Address: ${address} `}</h4>
      </div>

      );
}
export default StudentInfo1;
//có thể dùng song song với nhau
export {StudentInfo, StudentInfo1}