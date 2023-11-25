import Cookies from "js-cookie"
import Image from "next/image"
import {useRouter} from "next/router"
import dynamic from "next/dynamic"
import { useContext } from "react"
import {Store} from '../context/Cart'
import Layout from "../components/Layouts"
import Link from "next/link"


function CartPage() {

const cart = Cookies.get('cart')
console.log(cart)


  const router = useRouter()
  const {state, dispatch} = useContext(Store)
  const {
    cart: {cartItems}, 
} = state

function removeItemHandler(item) {
  dispatch({ type: 'REMOVE_ITEM', payload: item })
}
  return (
    <Layout title="سبد خرید">
        <h1 className="mb-4 text-xl">سبد خرید</h1>
        {cartItems.length === 0 ? (
        <div className="h-24 min-h-full">سبد خالی است</div>
        ):(
          <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3 bg-white rounded-xl border-2 border-gray-200 p-2">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th  className="px-5 text-right">محصول</th>
                <th  className="px-5 text-right">تعداد</th>
                <th  className="px-5 text-right">قیمت</th>
                <th  className="px-5 text-left">حذف</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr 
                key={cartItems.slug} 
                className="border-b">
                  <td className="flex items-start">
                    <Link
                     href={`/product/${item.slug}`}
                    >
                    <Image 
                  className="rounded-xl px-1 ml-1"
                  src={item.image}
                  width={70}
                  height={70}
                  alt="product"
                  />
                  {item.title}
                    </Link>

                  </td>
                  <td className="p-5 text-right">
                  {item.qty}
                  </td>
                  <td  className="p-5 text-right">
                  {item.price.toLocaleString()} <span>تومان</span>
                  </td>
                  <td  className="p-5 text-center">
                  <button onClick={()=>removeItemHandler(item)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className="shadow-lg bg-white rounded-xl border-2 border-gray-200 p-4 ">
            <div className="pb-5 grid md:grid-cols-2 md:gap-5">
            <div className="m-0">
            جمع قیمت
            </div>
            <div className="m-0">
            {cartItems.reduce((acc,cur) => acc+cur.qty*cur.price, 0).toLocaleString()} <span>تومان</span>
            </div>
            </div>
            <div>
              <button 
              className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full" 
              onClick={() => router.push('/address')}>
                پرداخت
              </button>
            </div>
          </div>
          </div>
        )}
    </Layout>

  )
}
export default dynamic(() => Promise.resolve(CartPage), {ssr:false})