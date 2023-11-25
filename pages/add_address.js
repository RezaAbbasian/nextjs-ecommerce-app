import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { Store } from '../context/Cart'
import { toast } from 'react-toastify';
import Layout from '../components/Layouts'
import CheckoutWizard from '../components/CheckoutWizard'

function AddAddress() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

    const token = Cookies.get('token');
fetch (`${process.env.API_URL}addresses/store`, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
.then((response) => response.json())
.then((result) => {
  console.log(result)
 if(result.message == 'success'){
  // console.log(result.data)
   console.log("ارسال شد");
   toast.success('آدرس جدید اضافه شد')
   router.push('/address');
  //  Cookies.remove('cart');
  //  if(paymentMethod == 'آنلاین'){
  //    router.push(result.data.payment_online)
  //   }else{
  //    router.push('/payment_offline')
  //  }
  } else {
      console.log("ارسال نشد :(");
  }
} );

    console.log(data);
  };

  // Get city
  const [selectedProvinceId, setSelectedProvinceId] = useState(null);
  const handleProvinceChange = (event) => {
    const id = event.target.value;
    setSelectedProvinceId(id) 
  };

const [cities, setCities] = useState([])
useEffect(() => { 
  // alert(selectedProvinceId)
  console.log(selectedProvinceId)
    const fetchcities=()=>{
      const token = Cookies.get('token');
      if(!token && !cart){
        router.push('/login')
      }
      axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${process.env.API_URL}addresses/provinces/${selectedProvinceId}/cities`
      }).then(response => {
        console.log(response.data);
        setCities(response.data)
      });
    }
    fetchcities()
}, [selectedProvinceId]);

// Get  Provinces
  const [provinces, setProvinces] = useState([])
  useEffect(()=>{
    const fetchprovinces=()=>{
      const token = Cookies.get('token');

      if(!token && !cart){
        router.push('/login')
      }

      axios.request({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: "GET",
        url: `${process.env.API_URL}addresses/provinces`
      }).then(response => {
        // console.log(response.data);
        setProvinces(response.data)
      });
    }
    fetchprovinces()
    
  },[])

  return (
    <Layout title='Address'>
      <CheckoutWizard activeStep={1} />
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(onSubmit)}
        // onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className='mb-4 text-xl'>آدرس</h2>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='title'
            placeholder='عنوان آدرس: مثل خانه یا محل کار'
            autoFocus
            {...register('title')}
          />
        </div>

        <div className='mb-4'>
        <select onInput={handleProvinceChange}
        className='w-full rounded-xl p-2 outline-0'
          id="province_id"
          name="province_id"
          {...register('province_id')}
        >
          <option value=''>استان</option>
          {provinces.map((provitem)=>
          <option value={provitem.id} key={provitem.slug}>{provitem.name}</option>
          )}
        </select>
        </div>

        <div className='mb-4'>
          
        <select 
                className='w-full rounded-xl p-2 outline-0'
                autoFocus
                 id="city_id"
                  name="city_id"
                  {...register('city_id')}
        >
          <option value="">شهر</option>
          {cities.map((cititem)=>
          <option value={cititem.id} key={cititem.slug}>{cititem.name}</option>
          )}
        </select>
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
            id='postal_code'
            placeholder='کد پستی'
            autoFocus
            {...register('postal_code')}
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='no'
            placeholder='پلاک'
            autoFocus
            {...register('no')}
          />
        </div>

        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='unit'
            placeholder='واحد یا زنگ'
            autoFocus
            {...register('unit')}
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='full_name'
            placeholder='نام کامل گیرنده'
            autoFocus
            {...register('full_name')}
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='mobile'
            placeholder='شماره موبایل'
            autoFocus
            {...register('mobile')}
          />
        </div>

        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='lat'
            type="hidden"
            autoFocus
            {...register('lat')}
          />
        </div>
        <div className='mb-4'>
          <input
            className='w-full rounded-xl p-2 outline-0'
            id='long'
            type="hidden"
            autoFocus
            {...register('long')}
          />
        </div>
        <div className='mb-4 flex justify-between'>
        <button
            onClick={() => router.push('/address')}
            type='button'
            className='rounded-xl bg-gray-300 text-gray-700 px-4 py-2 w-28'
          >
            بازگشت
          </button>
        <div className='mb-4'>
          <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-28'>
          ثبت آدرس
          </button>
        </div>
        </div>
      </form>
    </Layout>
  )
}


export default AddAddress
