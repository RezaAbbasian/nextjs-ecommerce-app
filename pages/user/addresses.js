import { useEffect, useState } from "react"
import axios from 'axios';
import Cookies from 'js-cookie'
import Layout from "../../components/Layouts";
import {useRouter} from 'next/router';
import UserMenu from '../../components/UserMenu';

export default function User() {
const router = useRouter()

  // Get  Addresses
  const [addresses, setAddresses] = useState([])
  useEffect(()=>{
    const fetchaddresses=()=>{
      const token = Cookies.get('token');
      if(!token && !cart){
        router.push('/login')
      }
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${process.env.API_URL}addresses`
      }).then(response => {
        console.log(response.data);
        setAddresses(response.data)
      });
    }
    fetchaddresses()
  },[])

  return (
    <Layout>
    <div className='flex flex-row' >
    <div className="col-4 px-4 py-4">
    <UserMenu/>

    </div>

    <div className="col-8 px-4 py-4">
    <h1>آدرس‌ها</h1>
          {addresses.map((adindex)=>
          <div className="border rounded-xl bg-gray-200 border-gray-300 px-4 py-4"
          key={adindex.id}>
            <h3>{adindex.title}</h3>
            <p>{adindex.city}، {adindex.address}، {adindex.no}، {adindex.unit}، {adindex.postal_code}</p>
            </div>
          )}
    </div>

    </div>

    </Layout>

  )
}