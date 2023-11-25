import { useEffect, useState } from "react"
import Link from "next/link";
import axios from 'axios';
import Cookies from 'js-cookie'
import Layout from "../../../components/Layouts";

export default function Orders() {

  const [orders, setOrders] = useState([])
  useEffect(()=>{
    const fetchOrders=()=>{
      const token = Cookies.get('token');
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${process.env.API_URL}orders`
      }).then(response => {
        console.log(response.data);
        setOrders(response.data)
      });
    }
    fetchOrders()
  },[])

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
            <div className="w-full text-center">مبلغ</div>
            <div className="w-6/12 text-center">وضعیت</div>
            <div className="w-9/12 text-center">پرداخت</div>
          </div>
          <div className="flex flex-col">
          {orders.map((item , index) => (
          <div className="flex flex-row p-2 w-full border-b border-gray-400 text-right" key={item.id}>
            <div className="w-2/12">{[index + 1]}</div>
            <div className="w-full">{item.order_num}</div>
            <div className="w-full">{item.tracking_code ?? 'درج نشده'}</div>
            <div className="w-full">{item.created_at}</div>
            <div className="w-full text-center">{item.total.toLocaleString()}</div>
            <div className="w-6/12 text-center">{item.status}</div>
            <div className="w-9/12 text-center">
              <Link href={item.payment_online}
              className="border bg-gray-600 rounded-xl text-white mt-2 px-2 py-1"
              >
              آنلاین
            </Link>
            <Link href={`/user/orders/offline_payment/${item.id}`}
              className="border bg-gray-600 rounded-xl text-white mt-2 px-2 py-1"
              >
              کارت‌به‌کارت
            </Link>
            </div>
          </div>
          ))}
          </div>
          </div>
    </div>
    </Layout>

  )
}




