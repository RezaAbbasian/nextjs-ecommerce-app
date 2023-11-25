import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import Cookies from 'js-cookie'
import { Store } from '../context/Cart'
import Layout from '../components/Layouts'
import CheckoutWizard from '../components/CheckoutWizard'
import moment from 'jalali-moment'

function DeliveryTime() {
  
  let [value, setValue] = useState(new Date())

  const { state, dispatch } = useContext(Store)
  const { cart } = state
  const { deliveryMethod } = cart

  const [deliveryTime, setDeliveryTime] = useState('')

  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault()
    console.log(deliveryTime);
    if (!deliveryTime) {
      alert('Please Select Delivery Method')
    }

    dispatch({ type: 'SAVE_DELIVERY_TIME', payload: deliveryTime })

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        deliveryMethod: deliveryTime,
      })
    )

    router.push('/payment')
  }

  // const today = Date();
  // var threeday = Date();
  // threeday.setDate(today.getDate()+3);

  // const methods = ["سریعترین زمان","سه روزه دیگر","15 روز دیگر"];

  let today = moment().add(1, 'day').locale('fa').format('YYYY/MM/DD');
  let threedays = moment().add(3, 'day').locale('fa').format('YYYY/MM/DD');
  let fifteendays = moment().add(15, 'day').locale('fa').format('YYYY/MM/DD');
  // today.format('jYYYY/jMM/jDD');
  // today = Intl.DateTimeFormat('fa-IR').format(today.add(1, 'd'));
  // today = Intl.DateTimeFormat('fa-IR');
  // let threedays = today.add(1, 'day').locale('fa').format('YYYY/MM/DD'); // 1367/11/05
  // let threedays = Intl.DateTimeFormat('fa-IR').format(moment().add(3, 'd'));
  // let fifteendays = Intl.DateTimeFormat('fa-IR').format(moment().add(15, 'd'));
  // const dates = [today, threedays]
  const dates = [today, threedays, fifteendays]

// console.log(deliveryTime);

  return (
    <Layout title='Payment Page'>
      <CheckoutWizard activeStep={3} />
      <form className='mx-auto max-w-screen-md' onSubmit={submitHandler}>
        <h2 className='mb-4 text-xl'>زمان ارسال</h2>
        {/* <DatePicker
        value={value}
        onChange={setValue}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      /> */}
      <br />
        {dates.map((item) => (
          <div key={item} className='mb-4'>
            <input
              name='paymentMethod'
              className='p-2 outline-none focus:ring-0'
              id={item}
              type='radio'
              checked={deliveryTime === item}
              onChange={() => setDeliveryTime(item)}
            />
            <label className='p-2' htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
        <div className='mb-4 flex justify-between'>
          <button
            onClick={() => router.push('/shipping')}
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







export default DeliveryTime
