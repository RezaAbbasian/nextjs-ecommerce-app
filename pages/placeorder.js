import Cookies from 'js-cookie'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState} from 'react'
import { Store } from '../context/Cart'
import { toast } from 'react-toastify';
import Layout from '../components/Layouts'
import CheckoutWizard from '../components/CheckoutWizard'


function PlaceOrderPage() {
const token = Cookies.get('token');
  const router = useRouter()

  const { state } = useContext(Store)

  const { cart } = state
  const { addressData, shippingMethod, deliveryTime, paymentMethod, cartItems } = cart
  console.log(deliveryTime);
  
  async function placeOrderHandler() {

    const totalPrice = cartItems.reduce(
      (acc, cur) => acc + cur.qty * cur.price,
      0
    )

    const formValue = {
      address_id: addressData.address_id,
      payment_id: paymentMethod,
      delivery_time: deliveryTime,
      shipping_id: shippingMethod,
      sabad: cartItems
    }
    console.log(formValue);

    fetch (`${process.env.API_URL}orders/store`, {
      method: 'POST',
      body: JSON.stringify(formValue),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
     if(result.status == 200){
      console.log(result.data.payment)
       console.log("ارسال شد");
       toast.success('سفارش شما ثبت شد')
       Cookies.remove('cart');
       if(paymentMethod == 'آنلاین'){
         router.push(result.data.payment_online)
        }else{

         router.push(`/user/orders/offline_payment/${result.data.id}`)
       }
      } else {
          console.log("ارسال نشد :(");
      }
    } );


  }

  return (
    
    <Layout title='Place Order'>
      <CheckoutWizard activeStep={4} />
      <h1 className='mb-4 text-xl'>تایید نهایی</h1>
      <div className='grid md:grid-cols-4 md:gap-5'>
        <div className='overflow-x-auto md:col-span-3'>

          <div className='flex flex-row w-full'>

          <div className='p-5'>
            <h2 className='text-lg'>اطلاعات ارسال</h2>
            <div suppressHydrationWarning>
            <p suppressHydrationWarning>
            {/* {addressData.address_id} */}
            {addressData.address_id}
            </p>
              {/* {shippingData.name}
              {shippingData.address}
              {shippingData.postalCode} */}
            </div>
            <div>
              <Link href='/address'>ویرایش</Link>
            </div>
          </div>

          <div className='p-5'>
            <h2 className='mb-2 text-lg'>روش ارسال</h2>
            <div>{shippingMethod}</div>
            <div>
              <Link href='/shipping'>ویرایش</Link>
            </div>
          </div>

          </div>

          <div className='flex flex-row w-full'>

          <div className='p-5'>
            <h2 className='mb-2 text-lg'>روش پرداخت</h2>
            <div>{paymentMethod}</div>
            <div>
              <Link href='/payment'>ویرایش</Link>
            </div>
          </div>
          
          <div className='p-5'>
            <h2 className='mb-2 text-lg'>زمان ارسال</h2>
            <div>{deliveryTime}</div>
            <div>
              <Link href='/delivery_time'>ویرایش</Link>
            </div>
          </div>

          </div>


          <div className='overflow-x-auto p-5'>
            <h2 className='mb-5 text-lg'>کالای سفارش داده شده</h2>
            <table className='min-w-full'>
              <thead className='border-b'>
                <tr>
                  <th className='px-5 text-left'>نام کالا</th>
                  <th className='p-5 text-right'>تعداد</th>
                  <th className='p-5 text-right'>قیمت</th>
                  <th className='p-5 text-right'>جمع</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className='border-b'>
                    <td>
                      <div className='flex items-center'>
                        <Image src={item.image} width={50} height={50} alt={item.title} />
                        &nbsp;
                        {item.title}
                      </div>
                    </td>
                    <td className='p-5 text-right'>{item.qty}</td>
                    <td className='p-5 text-right'>{(item.price).toLocaleString()} <span>تومان</span></td>
                    <td className='p-5 text-right'>{(item.qty * item.price).toLocaleString()} <span>تومان</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Link href='/cart'>ویرایش</Link>
            </div>
          </div>

        </div>
        
        <div className='p-5'>
          <h2 className='mb-2 text-lg'>سفارش شما</h2>
          <ul>
            <li>
              <div className='mb-2 flex justify-between'>
                <div>مبلغ نهایی</div>
                <div>
                  {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0).toLocaleString()} تومان
                </div>
              </div>
            </li>
            <li>
              <button
                onClick={placeOrderHandler}
                className='rounded-xl bg-gray-700 text-white px-4 py-2'
              >
                پرداخت
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default PlaceOrderPage
