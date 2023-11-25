import { useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';
import Layout from '../components/Layouts';
import Router from 'next/router'
import Link from 'next/link';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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

fetch (`${process.env.API_URL}register`, {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
.then((response) => response.json())
.then((result) => {
  console.log(result.status)
 if(result.message === "SUCCESS"){
  //  alert("You are logged in.");
        const token = result.authorization.token
        Cookies.set('token', token, { expires: 180 })
        Router.push('/user');
  } else {
      // alert("Please check your login information.");
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
    <form onSubmit={handleSubmit}>
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'
        type="text"
        name="name"
        placeholder="نام"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'

        type="email"
        name="email"
        placeholder="ایمیل"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
            className='w-full rounded-xl p-2 outline-0 mb-4'

        type="password"
        name="password"
        placeholder="رمز عبور"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button className='rounded-xl bg-gray-700 text-white px-4 py-2 w-20'
       type="submit">ثبت‌ نام</button>
              <Link className="px-4" href='/login'>ورود
       </Link>
    </form>
    </>
    </Layout>
  );
};

export default RegisterForm;
