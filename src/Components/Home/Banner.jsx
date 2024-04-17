import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../../index.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
const Banner = () => {

    return (
        <div className='lg:mx-5 lg:ml-28 mt-10'>
            <Swiper
                spaceBetween={80}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-96 h-96 lg:h-96 md:h-[250px]   md:w-full lg:w-[1100px] rounded-3xl' src="https://i.ibb.co/4NpXNhr/pexels-pixabay-258154.jpg" />
                </SwiperSlide>
                <SwiperSlide  >
                    <img  className='w-96 h-96 md:w-full lg:w-[1100px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/tcWb2n4/pexels-donald-tong-189296.jpg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1100px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/wQtgfRP/pexels-thiago-2410577.jpg" />
                </SwiperSlide>
                
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1100px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/tzKD0pv/pexels-pixabay-261169.jpg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1100px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/fvg4n8V/pexels-pixabay-261102.jpg" />
                </SwiperSlide>

            </Swiper>


        </div>

    );
};


export default Banner;