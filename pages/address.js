import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Store } from '../context/Cart'
import Link from 'next/link'

import Layout from '../components/Layouts'
import CheckoutWizard from '../components/CheckoutWizard'

function Address() {

  const { handleSubmit, setValue, register } = useForm();

  const { state, dispatch } = useContext(Store);

  const { cart } = state;
  const { addressData } = cart;

  const router = useRouter();

  // useEffect(() => {
  //   setValue('address_id', addressData.address_id)
  //   setValue('title', addressData.title)
  //   setValue('address', addressData.address)
  // }, [
  //   setValue,
  //   addressData.address_id,
  //   addressData.title,
  //   addressData.address,
  // ])



  // function submitHandler({ address_id, title, address }) {
  function submitHandler({ address_id, title, address }) {


    dispatch({
      type: 'SAVE_ADDRESS_DATA',
      payload: { address_id, title, address },
    })

    Cookies.set(
      'cart',
      JSON.stringify({
        ...cart,
        addressData: {
          address_id, title, address
        },
      })
    )

    router.push('/shipping')
  }



  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const handleAddressChange = (event) => {
    const id = event.target.value;
    setSelectedAddressId(id)
    console.log(addressData)
  };


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
        // console.log(response.data);
        setAddresses(response.data)
      });
    }
    fetchaddresses()
  },[])



  return (
    <Layout title='Address'>
      <CheckoutWizard activeStep={1} />
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className='mb-4 text-xl'>آدرس</h2>
        <div className='flex flex-row'>
        <div className='mb-4 w-3/4'>
        <select onInput={handleAddressChange} required
        className='w-full rounded-xl p-2 outline-0'
          id="address_id"
          name="address_id"
          {...register('address_id')}
        >
          <option>انتخاب آدرس</option>
          {addresses.map((adindex)=>
          <option 

           value={adindex.id} key={adindex.id}>
            {adindex.title} - {adindex.address} {adindex.no} {adindex.unit}
            </option>

          )      
          }
        </select>
        </div>
        <div className='mt-2 mr-2 w-1/4'>
        <Link 
        href="/add_address"
        className='rounded-xl bg-gray-400 text-white px-4 py-2 w-full'>
          + افزودن آدرس جدید
          </Link>
          </div>
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
