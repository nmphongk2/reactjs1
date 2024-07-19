// import React, { useEffect, useState } from 'react';


// // const [value, setValue] = useState({});
// // const [errors, setErrors] = useState({});

// const [value, setValue] = useState({
//   username: '',
//   password: ''
// });
// const [errors, setErrors] = useState({});
// const onTextChange = (props) => {
//   // console.log("name ====", props.target.name);
//   // console.log("value ====", props.target.value);
//   setValue({
//     ...value,
//     [props.target.name]: [props.target.value]
//   })
//   }
// const Login = () => {


// let errorsTemp = {};
// Object.keys(value).map((item, index)=>{
// if(value[item]?.trim() == ''){
//   errorsTemp = {
//     ...errorsTemp,
//     [item]: 'please enter complete info.'
//   }
// }
// })
// setErrors(errorsTemp);

//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');

// //   const usernameChange = (props) => {
// //     console.log("on username change === ", props.target.value);
// //     setUsername(props.target.value)
// // }

// // const passwordChange = (props) => {
// //   console.log("on password change === ", props.target.value);
// //   setPassword(props.target.value)
// // }

// // const onTextChange = (props) => {
// //   console.log("name ====", props.target.name);
// //   console.log("value ====", props.target.value);


// // }

// useEffect( ()=>{
//   console.log("Value Change ===", value);
// }, [value])

//     return (
//         <div className='container'>
//             <div className='col-4 offset-4'>
//             <h1 className='text-primary'>Login</h1>
//             <div className='mb-3'>
//             <label className='form-label'>Username</label>
//             <input type='text' name='username' className='form-control' value={value.username} onChange={onTextChange}/>
//             {errors?.username && <small className='text-danger'>{errors?.username}</small>}
//             </div>
//              <div className='mb-3'>
//             <label className='form-label'>Password</label>
//             <input type='password' name='password' className='form-control' value={value.password}  onChange={onTextChange}/>
//             {errors?.password && <small className='text-danger'>{errors?.password}</small>}
//             </div>
//             <button className='btn btn-success w-100 mb-3' onClick={Login}>{`Login`}</button>
//             <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
//             </div>
//         </div>
//     );
  
//   }
//export default Login;
import React, { useEffect, useState } from 'react';

const Login = () => {
  const [value, setValue] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const onTextChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    let errorsTemp = {};
    Object.keys(value).forEach((item) => {
      if (value[item]?.trim() === '') {
        errorsTemp[item] = 'Please enter complete info.';
      }
    });
    setErrors(errorsTemp);
    // Handle login logic here
  };

  useEffect(() => {
    console.log("Value Change ===", value);
  }, [value]);

  return (
    <div className='container'>
      <div className='col-4 offset-4'>
        <h1 className='text-primary'>Login</h1>
        <div className='mb-3'>
          <label className='form-label'>Username</label>
          <input
            type='text'
            name='username'
            className='form-control'
            value={value.username}
            onChange={onTextChange}
          />
          {errors?.username && <small className='text-danger'>{errors?.username}</small>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            value={value.password}
            onChange={onTextChange}
          />
          {errors?.password && <small className='text-danger'>{errors?.password}</small>}
        </div>
        <button className='btn btn-success w-100 mb-3' onClick={handleLogin}>{`Login`}</button>
        <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
      </div>
    </div>
  );
};

export default Login;
