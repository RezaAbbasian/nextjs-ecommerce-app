import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import Link from "next/link";
import axios from 'axios';
import Cookies from 'js-cookie'
import Layout from "../../../components/Layouts";


export default function OrderDetails() {
  const [order, setOrder] = useState([])
  const router = useRouter()
  useEffect(()=>{
    const id =  router.query.id
    console.log(id)
    const fetchOrder=()=>{
      const token = Cookies.get('token');
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${process.env.API_URL}orders/${id}`
      }).then(response => {
        console.log(response.data);
        setOrder(response.data)
      });
    }
    fetchOrder()
  },[])

  // return <p>Post: {router.query.id}</p>
  
  return (
    <Layout title="سفارش ها">
    <div className="col-12">
        <h1>سفارشات</h1>
          <div className="w-full p-5 text-sm text-right">
          <div className="flex flex-row p-4 w-full bg-gray-200 border-b border-gray-400 rounded-md border-0 outline-0">
            <div className="w-2/12">#</div>
            <div className="w-full">شماره سفارش</div>
            <div className="w-full">کد پیگیری</div>
            <div className="w-full">تاریخ سفارش</div>
            <div className="w-full">مبلغ</div>
            <div className="w-full">وضعیت</div>
            <div className="w-full">پرداخت</div>
          </div>
          <div className="flex flex-col">
          {/* {orders.map((item , index) => (
          <div className="flex flex-row p-2 w-full border-b border-gray-400 text-right" key={item.id}>
            <div className="w-2/12">{[index + 1]}</div>
            <div className="w-full">{item.order_num}</div>
            <div className="w-full">{item.tracking_code ?? 'درج نشده'}</div>
            <div className="w-full">{item.created_at}</div>
            <div className="w-full">{item.total}</div>
            <div className="w-full">{item.status}</div>
            <div className="w-full">
              <Link href={item.payment_online}
              className="border bg-gray-600 rounded-xl text-white mt-2 px-2 py-1"
              >
              پرداخت
            </Link>
            </div>
          </div>
          ))} */}
          </div>
          </div>
    </div>
    </Layout>

  )
}