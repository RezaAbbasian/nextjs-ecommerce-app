import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'

import { Store } from '../context/Cart'

import Layout from '../components/Layouts'
import CheckoutWizard from '../components/CheckoutWizard'

function Address() {
  const { handleSubmit, setValue, register } = useForm()

  const { state, dispatch } = useContext(Store)

  const { cart } = state
  const { addressData } = cart

  useEffect(() => {
    setValue('name', addressData.name)
    setValue('address', addressData.address)
    setValue('postalCode', addressData.postalCode)
  }, [
    setValue,
    addressData.name,
    addressData.address,
    addressData.postalCode,
  ])

  const router = useRouter()

  function submitHandler({ name, address, postalCode }) {
    dispatch({
      type: 'SAVE_ADDRESS_DATA',
      payload: { name, address, postalCode },
    })

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        addressData: {
          name,
          address,
          postalCode,
        },
      })
    )

    router.push('/shipping')
  }

  return (
    <Layout title='Address'>
      <CheckoutWizard activeStep={1} />
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className='mb-4 text-xl'>آدرس</h2>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='name'
            placeholder='نام گیرنده'
            autoFocus
            {...register('name')}
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='address'
            placeholder='آدرس'
            autoFocus
            {...register('address')}
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='postalCode'
            placeholder='کد پستی'
            autoFocus
            {...register('postalCode')}
          />
        </div>
        <div className='mb-4'>
          <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-28'>
          بعدی
          </button>
        </div>
      </form>
    </Layout>
  )
}


export default Address
