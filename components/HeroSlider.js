import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';


function HeroSlider(){
    return (
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide>
        <Image className='rounded-xl'
            src={'/images/sliders/main-banner.png'}
            width={1600}
            height={800}
            alt='slide2'
            />
              <Link class="swiper-slide-inner" href="/">
              <div className="swiper-slide-contents">
              <div className="text-6xl mb-3 text-gray-700 font-bold">بیبی شیک شاپ</div>
              <div className="text-3xl text-gray-700 font-bold">فروشگاه خرید لباس بچه گانه</div>
                <div className="text-md mt-3 text-gray-600">فروش انواع لباس دخترانه، پسرانه و اسپرت</div>
                </div>
              </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Image className='rounded-xl'
            src={'/images/sliders/boy-1.png'}
            width={1600}
            height={800}
            alt='slide2'
            />
             <Link class="swiper-slide-inner" href="/">
              <div className="swiper-slide-contents">
                <div className="text-3xl text-gray-100 font-bold">خرید انواع لباس دخترانه</div>
                <div className="text-md mt-3 text-gray-300">مشاهده و خرید</div>
              </div>
              </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='rounded-xl'
            src={'/images/sliders/girls-2.png'}
            width={1600}
            height={800}
            alt='slide2'
            />
              <Link class="swiper-slide-inner" href="/">
              <div className="swiper-slide-contents">
              <div className="text-3xl text-gray-700 font-bold">خرید انواع لباس دخترانه</div>
                <div className="text-md mt-3 text-gray-600">مشاهده و خرید</div>
                 </div>
              </Link>
        </SwiperSlide>

</Swiper>
    )}

export default HeroSlider