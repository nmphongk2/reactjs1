import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';


const Profile = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
const [profile, setProfile] = useState(null)
    useEffect (() => {
        getUserInfo();
    }, [] );

    const getUserInfo = async () => {
        try{
        const token = cookie?.token;
        const res = await axios.get("http://172.16.21.214:3001/user",{
            Headers:{
                Authorization: `Bearer ${token}`
            },
        });
    console.log(res?.data);
    setProfile(res?.data)
    }catch(err){
console.log("err====", err);
    }
};
    return (
        <div classname="conatiner">
            <h1>{`Username: ${profile?.username}`}</h1>
            <h1>{`email:${profile?.email}`}</h1>
            <h1>{`name: ${profile?.name}`}</h1>

        </div>
    )
       
}
export default Profile;