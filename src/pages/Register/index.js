import React from 'react';


const usernameChange = (props) => {
    console.log("on username change === ", props);
}
const Register = () => {
    return (
        <div className='container'>
            <div className='col-4 offset-4'>
            <h1 className='text-primary'>Login</h1>
            <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input type='text' className='form-control' onChange={usernameChange}/>
            </div>
             <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type='password' className='form-control'/>
            </div>
            <button className='btn btn-success w-100 mb-3'>{`Login`}</button>
            <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
            </div>
        </div>
    )
}

export default Register;