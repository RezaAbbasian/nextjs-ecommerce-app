import { useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';
import Layout from '../../../../components/Layouts';
import Router from 'next/router'
import Link from 'next/link';

const Payment_Offline = () => {
  const token = Cookies.get('token');

  const [formData, setFormData] = useState({
    card_num: '',
    resnumber: '',
    amount: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    console.log(token)

fetch (`${process.env.API_URL}orders/6/gotocard`, {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
  },
})
.then((response) => response.json())
.then((result) => {
  console.log(result.status)
 if(result.message == "success"){
   alert("Sent :) ");
        // Router.push('/user');
  } else {
      alert("Please check your information.");
  }
});

    // try {
    //   axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    //   const response = await axios.post(`${process.env.API_URL}register`, formData);
    //   if (response.status === 200) {
    //     // Redirect or perform other actions upon successful registration
    //     console.log('ثبت‌نام با موفقیت انجام شد.');
    //     console.log(response.data.authorization.token);
    //     const token = response.data.authorization.token
    //     Cookies.set('token', token, { expires: 180 })
    //     Router.push('/user');
        
    //   }
    // } catch (error) {
    //   console.error('خطا در ثبت‌نام:', error);
    // }
  };

  return (
    <Layout>
      <>
      <div className='flex flex-col border outline-0 py-6 px-6'>

        <h2>پرداخت از طریق کارت به کارت</h2>
        <div class="flex flex-row">

        <div className='flex flex-col border rounded-xl outline-1 px-5 py-10 bg-green-300 col'>
        <label>شماره کارت بانک ملی</label>
        <input type="text" value="6037991937203804" readOnly className='rounded-xl px-2 outline-0 border rounded-full' />
        <label>فاطمه اسماعیلی</label> 
        </div>

        <div className='flex flex-col border rounded-xl outline-1 px-5 py-10 bg-blue-300 col'>
        <label>شماره کارت بانک صادرات</label> 
        <input type="text" value="6037697537177179" readOnly className='rounded-xl px-2 outline-0 border rounded-full'/>
        <label>فاطمه اسماعیلی</label> 
        </div>

      </div>
      </div>
    <form onSubmit={handleSubmit}>
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'
        type="number"
        name="card_num"
        placeholder="چهار رقم آخر شماره کارت"
        value={formData.card_num}
        onChange={handleChange}
        required
      />
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'
        type="number"
        name="amount"
        placeholder="مبلغ"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'
        type="number"
        name="resnumber"
        placeholder="شناسه پیگیری"
        value={formData.resnumber}
        onChange={handleChange}
        required
      />
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'
        type="number"
        name="date"
        placeholder="تاریخ"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'
        type="number"
        name="time"
        placeholder="ساعت"
        value={formData.time}
        onChange={handleChange}
        required
      />
      <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-20'
       type="submit">ارسال</button>

    </form>
    </>
    </Layout>
  );
};

export default Payment_Offline;
