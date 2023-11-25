import CatFront from './CatFront'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function CatsSlider({tags}){

    return (
      <div className='mx-0 mt-10'>
        <Swiper
        dir="rtl"
        slidesPerView={'auto'}
        spaceBetween={50}
        lazy='true'
        navigation={true} modules={[Navigation]} 
        centeredSlides={false}
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
          {tags.map((tItem) =>(
            <SwiperSlide key={tItem.slug}>
                <CatFront key={tItem.slug} item={tItem}></CatFront>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>

    )}

export default CatsSlider