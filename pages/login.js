import Cookies from 'js-cookie'
import { useState } from 'react';
import Router from 'next/router'
import axios from 'axios';
import Layout from '../components/Layouts';
import Link from 'next/link';

const LoginForm = () => {
  const [formData, setFormData] = useState({
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
// console.log(`${process.env.API_URL}login`)
console.log(formData)

fetch (`${process.env.API_URL}login`, {
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
      alert("خطا در ورود");
  }
});

//     try {
//       const response = await axios.post(`${process.env.API_URL}login`, formData);
// console.log(response)

//       if (response.status === 200) {
//         console.log('ورود با موفقیت انجام شد.');
//         console.log(response.data.authorization.token);
//         // Store the JWT token and redirect to a protected route
//         const token = response.data.authorization.token
//         Cookies.set('token', token, { expires: 180 })
//         Router.push('/user');
//       }
//     } catch (error) {
//       console.error('خطا در ورود:', error);
//     }


  };

  return (
    <Layout>
      <>
    <form onSubmit={handleSubmit}>
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
       type="submit">ورود</button>
       <Link className="px-4" href='/register'>
        ثبت نام
       </Link>
    </form>
    </>
    </Layout>
  );
};

export default LoginForm;
