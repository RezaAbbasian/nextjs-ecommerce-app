import Image from 'next/image';
import Product from '../components/Product'
import productItems from '../data/products.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const dealproduct = productItems.filter(
  (item) => item.sale
  );

function DealSlider(){

    return (
      <div className='mt-5'>
      <Swiper
      slidesPerView={5.5}
      spaceBetween={50}
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
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5.5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper">
          <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
          {dealproduct.map((pItem) =>(
            <SwiperSlide key={pItem.slug}>
                <Product key={pItem.slug} item={pItem}></Product>
            </SwiperSlide>
          ))}
          </div>
    </Swiper>
      </div>
    )}

export default DealSlider