import TagFront from '../components/TagFront'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function TagsSlider({tags}){
  
    return (
      <div className='mt-10 px-2'>
        <Swiper
                      dir="rtl"
                      lazy='true'
        slidesPerView={6.5}
        spaceBetween={40}
        navigation={true} modules={[Navigation]} 
        centeredSlides={false}
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4.5,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 5.5,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 50,
          },

        }}
        className="px-2 TagsSlider"
      >
          {tags.map((tItem) =>(
            <SwiperSlide key={tItem.slug}>
                <TagFront item={tItem} key={tItem.slug}></TagFront>
            </SwiperSlide>
          ))}
      </Swiper>
      </div>

    )}



    
export default TagsSlider

