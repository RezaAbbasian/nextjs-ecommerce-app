import { authMiddleware } from '../../middlewares/authMiddleware';
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import Layout from "../../components/Layouts";
import {useRouter} from 'next/router';
import UserMenu from '../../components/UserMenu';

export default function Logout() {
  const router = useRouter()

  const confirmAction = () => {

        Cookies.remove('token');
        router.push('/login')
}

  return (
    <Layout>
    <div className='flex flex-row' >

    <div className="col-4 px-4 py-4">
    <UserMenu/>
    </div>

    <div className="col-8 px-4 py-4">
    <button onClick={confirmAction}>
      خروج از حساب کاربری
    </button>
    </div>

    </div>

    </Layout>

  )
}