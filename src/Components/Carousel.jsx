import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  
import 'swiper/css/pagination';  
import 'swiper/css/autoplay';  

import img1 from '../assets/Gallary/img1.png';
import img2 from '../assets/Gallary/img2.png';
import img3 from '../assets/Gallary/img3.png';
import img4 from '../assets/Gallary/img4.png';
import img5 from '../assets/Gallary/img5.png';
import img6 from '../assets/Gallary/img6.png';

function Carousel() {
  
  return (
    <div className="container mx-auto mt-12">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src={img1} alt="Beach" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Mountain" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Forest" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Cityscape" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="River" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Sunset" className="w-full h-auto rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
