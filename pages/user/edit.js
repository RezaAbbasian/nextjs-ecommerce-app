import { authMiddleware } from '../../middlewares/authMiddleware';
import { useEffect, useState } from "react"
import axios from 'axios';
import Cookies from 'js-cookie'
import Layout from "../../components/Layouts";
import {useRouter} from 'next/router';
import UserMenu from '../../components/UserMenu';

export default function User() {
const router = useRouter()
  const [user, setUser] = useState([])

  useEffect(()=>{
    const fetchUser=()=>{
      const token = Cookies.get('token');

      if(!token){
        router.push('/login')
      }

      axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${process.env.API_URL}user`
      }).then(response => {
        console.log(response.data);
        setUser(response.data)
      });
    }
    fetchUser()
  },[])

  return (
    <Layout>
    <div className='flex flex-row' >
    <div className="col-4 px-4 py-4">
    <UserMenu/>

    </div>

    <div className="col-8 px-4 py-4">
    <h1>حساب کاربری</h1>
        <div className='flex flex-col'
          key={user.id}>
            <div className="px-2 py-2">نام: <input type='text' value={user.name}/></div>
            <div className="px-2 py-2">نام خانوادگی: <input type='text' value={user.lastname}/> </div>
            <div className="px-2 py-2">ایمیل:  <input type='text' value={user.email}/> </div>
            <div className="px-2 py-2">شماره موبایل: <input type='text' value={user.mobile}/></div>          
          </div>
    </div>

    </div>

    </Layout>

  )
}