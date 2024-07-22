import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const usernameChange = (props) => {
    console.log("on username change === ", props);
}
const Register = () => {
const {register, setValue,setError, formState,reset,handleSubmit, getValues} = useForm()

const registerSubmit = async (value) => {
console.log(value);

try{
    const res =  await axios.post("http://10.82.60.26:3001/user/register", {
        username: value?.username,
        email:value?.email,
        password: value?.password,
        full_name: value?.full_name
    });
    console.log("respones====", res);
    console.log("end call api");
}catch(err) {
    console.log("error===", err);
}

// axios.post("http://10.82.60.26:3001/user/register", {
//     username: value?.username,
//     email:value?.email,
//     password: value?.password,
//     full_name: value?.full_name
// }).then(res =>{
//     console.log("respones====", res?.data);
// })
// .catch((err) => {
//     console.log("err=====", err?.response?.data);
// });


}
    return (
        <div className='container'>
            <div className='col-4 offset-4'>
            <h1 className='text-primary'>Register</h1>
            <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input type='text' className='form-control' {...register("username", 
            {required: {value: true, message: "Tài Khoản Không được bỏ trống"}, 
            minLength: {value: 5, message: "Tài khoản có ít nhất 5 kí tự"}
            })}/>
            {formState?.errors?.username && (
                <small className='text-danger'>
                    {
                        formState?.errors?.username?.message
                    }
                </small>
            )}
            </div>
        
             <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type='password' className='form-control' {...register("password", 
            {required: {value: true, message: "Tài Khoản Không được bỏ trống"}, 
            minLength: {value: 6, message: "password có ít nhất 6 kí tự"}

})}/>
{formState?.errors?.password && (
    <small className='text-danger'>
        {
            formState?.errors?.password?.message
        }
    </small>
)}
</div>

<div className='mb-3'>
                    <label className='form-label'>Xác nhận mật khẩu</label>
                    <input name='password' type='password' className='form-control'
                        {...register("confirm", {
                            required: {
                                value: true,
                                message: "Xác nhận mật khẩu không được bỏ trống"
                            },
                            minLength: {
                                value: 6,
                                message: "Xác nhận mật khẩu phải có ít nhất 6 ký tự"
                            },
                            validate: (confirm) => {
                                const password = getValues()?.password
                                if (confirm === password) {
                                    return true;
                                }
                                return "Mật khẩu và xác nhận mật khẩu phải trùng nhau"
                            }
                        })} />
                    {formState?.errors.confirm &&
                        <small className='text-danger'>
                            {
                                formState?.errors?.confirm.message
                            }
                        </small>
                    }

                </div>


                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input name='email' type='email' className='form-control'{...register("email", {
                        required: {
                            value: true,
                            message: " Email không được bỏ trống",
                        },
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Email không đúng định dạng",
                        }
                    })} />
                    {formState?.errors?.email && (
                        <small className='text-danger'>
                            {formState?.errors?.email?.message}
                        </small>
                    )}

                </div>
            <div className='mb-3'>
            <label className='form-label'>Họ Tên</label>
            <input type='text' className='form-control' onChange={usernameChange}/>
            </div>
        <div className='mb-3'>
            <label className='form-label'>Giới tính</label>
            <div className='form-check'>
            <input className='form-check-input' type='radio' value={"female"} 
            {...register("gender")} />
            <label className='form-check-label' htmlForfor="">Nữ</label>
            </div>
            <div className='form-check'>
            <input className='form-check-input' type='radio' value={"male"} 
            {...register("gender")} />
            <label className='form-check-label' htmlForfor="">Nam</label>
            </div>
        </div>
        <div className='mb-3'>
            <label htmlFor='' className='form-label'>Ngành học</label>
            <select className='form-select form-select-lg' name=''>
                <option selected>-----Chọn Ngành Học</option>
                <option value="be">{`Lập trình web (BE)`}</option>
                <option value="fe">{`Lập trình web (FE)`}</option>
                <option value="java">{`Phát triển phần mềm (Java)`}</option>
                <option value="c#">{`Phát triển phần mềm (C#)`}</option>
            </select>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Sở thích</label>
            <div className='form-check'>
            <input className='form-check-input' name='check' id='check' type='checkbox' />
            <label className='form-check-label' htmlForfor="">Du lịch</label>
            </div>
            <div className='form-check'>
            <input className='form-check-input' name='check'  id='check' type='checkbox' />
            <label className='form-check-label' htmlForfor="">Thể thao</label>
            </div>
        </div>
            <button className='btn btn-success w-100 mb-3' onClick={handleSubmit(registerSubmit)}>{`Register`}</button>
            <a className='btn btn-primary w-auto me-3' href='/Login'>Login</a>
            </div>
        </div>
    )
}

export default Register;