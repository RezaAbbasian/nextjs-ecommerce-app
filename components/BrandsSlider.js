import Image from 'next/image';
import BrandFront from './BrandFront'
import tagsItems from '../data/brands.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function CatsSlider(){
    return (
      <div className='mt-10 mx-auto'>
        <Swiper
        // slidesPerView={4}
        // spaceBetween={250}
        navigation={true} modules={[Navigation]} 
        breakpoints={{
          240: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          420: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView:4,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 150,
          },
          1024: {
            slidesPerView:4,
            spaceBetween: 250,
          },
        }}

        className="mySwiper"
      >
          {tagsItems.map((tItem) =>(
            <SwiperSlide key={tItem.slug}>
                <BrandFront key={tItem.slug} item={tItem}></BrandFront>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>

    )}

export default CatsSlider