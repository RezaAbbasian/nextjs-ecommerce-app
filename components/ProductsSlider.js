import { useEffect, useState } from 'react';
import axios from 'axios';

import Image from 'next/image'
import Product from './Product'
// import productItems from '../data/products.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'


function ProductsSlider({products}){

  
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   // آدرس API خارجی را در اینجا قرار دهید
  //   const apiUrl = `${process.env.API_URL}products`;

  //   // فراخوانی API با استفاده از axios
  //   axios.get(apiUrl)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data from API:', error);
  //     });
  // }, []);


  // const productswhitoutdeal = products.filter(
  //   item => typeof item.sale === 'undefined'
  //   );


    return (
      <div className='mt-1'>
      <Swiper
              dir="rtl"
              lazy='true'
      slidesPerView={5.5}
      spaceBetween={40}
      centeredSlides={false}
      loop={true}
      navigation={true} modules={[Navigation]} 
      breakpoints={{
        240: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        360: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        420: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 5.5,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 5.5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper">
          <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
          {products.map((pItem) =>(
            <SwiperSlide key={pItem.slug} >
                <Product item={pItem} key={pItem.slug}></Product>
            </SwiperSlide>
  ))}
          </div>
    </Swiper>
      </div>
    )}



export default ProductsSlider