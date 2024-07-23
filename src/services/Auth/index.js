import request from "../../compoents/config/Api";

const loginApi = async () => {
    const res = await request ({
        path: '/auth/login',
        method: 'POST',
        data: {
            username: username,
            password: password,
            device: "website",
        },
    });
    const getProfile = async () =>{
        const res = await request({path: '/user'});
        return res;
    }
}
export  {loginApi,getProfile};