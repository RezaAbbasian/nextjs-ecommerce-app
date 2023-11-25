import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Store } from '../context/Cart'

import Layout from '../components/Layouts'
import CheckoutWizard from '../components/CheckoutWizard'
import { parse } from 'postcss'

function ShippingPage() {


  const token = Cookies.get('token');
  const { state, dispatch } = useContext(Store)

  const { cart } = state
  const { shippingMethod } = cart

  const [selectedShippingMethod, setSelectedShippingMethod] = useState('')

  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault()

    if (!selectedShippingMethod) {
      alert('Please Select Shipping Method')
    }

    dispatch({ type: 'SAVE_SHIPPING_METHOD', payload: selectedShippingMethod })

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        shippingMethod: selectedShippingMethod,
      })
    )

    router.push('/delivery_time')
  }

  // const shipping_methods = [
  //   'پیک فقط تهران',
  //     'پست پیشتاز',
  //      'ارسال 3 روزه',
  //     'ارسال 15 روزه',
  //   ]

    const [shipping, setShipping] = useState([])

    useEffect(()=>{
      const fetchshippings=()=>{
        const token = Cookies.get('token');
  
        if(!token && !cart){
          router.push('/login')
        }
  
        axios.request({
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: "GET",
          url: `${process.env.API_URL}shipping`
        }).then(response => {
          console.log(response.data);
          setShipping(response.data)
        });
      }
      fetchshippings()
    },[])


// fetch (`${process.env.API_URL}shipping`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//     })

    // const res = await fetch (`${process.env.API_URL}shipping`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`,
    //   },
    // })
    // const shippings = await res.json()

    // .then((response) => response.json())

    // .then((result) => {
    //   // const shipping_methods = result.data
    //   // console.log()

    //   console.log(result.json)

    //  if(result == 200){
    //   console.log(result)

    //   //  alert("ارسال شد");
    //   //  router.push(result.data.payment)
    //   } else {
    //       // alert("ارسال نشد :(");
    //   }
    // } );



  return (
    <Layout title='Shipping Page'>
      <CheckoutWizard activeStep={2} />
      <form className='mx-auto max-w-screen-md' onSubmit={submitHandler}>
        <h2 className='mb-4 text-xl'>روش ارسال</h2>
        {shipping.map((item) => (
          <div key={item.id} className='p-5 mb-4 rounded-2xl border-2 border-gray-400'>
            <input
              name='shippingMethod'
              className='p-2 outline-none focus:ring-0'
              id={item.id}
              type='radio'
              checked={selectedShippingMethod === item.id}
              onChange={() => setSelectedShippingMethod(item.id)}
            />
            <label className='p-2' htmlFor={item.id}>
              <b>{item.title}:</b> {item.description} <b>هزینه</b> --- {item.price} <span>تومان</span>
            </label>
          </div>
        ))}
        <div className='mb-4 flex justify-between'>
          <button
            onClick={() => router.push('/address')}
            type='button'
            className='rounded-xl bg-gray-300 text-gray-700 px-4 py-2 w-28'
          >
            بازگشت
          </button>
          <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-28'>
            بعدی
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default ShippingPage
