import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Pagination, Navigation } from 'swiper/modules';
// import images from './glob.png';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Rate, Badge } from 'antd';

let swiperData = [
  {
    img: "./Images/swiper1.png",
    title: "Entrepreneurs & Investors Videos",
    description: `Let's empower investors and entrepreneurs to share top-notch video content, offering expert insights, actionable advice.`,
  },
  {
    img: "./Images/swiper2.png",
    title: "Host Podcasts",
    description: `Create engaging podcasts for investors and entrepreneurs focusing on startup investing, entrepreneurship, and industry trends.`,
  },
  {
    img: "./Images/swiper3.png",
    title: "Create Events",
    description: `Host live pitch events on social media for startups to present to investors. Audience engagement through voting and interaction.`,
  },
  {
    img: "./Images/swiper4.png",
    title: "Post jobs",
    description: `Offer a platform for users to post job openings, fostering a community where entrepreneurs and investors can connect with talent.`,
  },
  {
    img: "./Images/swiper5.png",
    title: "Enable Location-Based Network",
    description: `Allow users to view each other's locations on a Google Map interface, enhancing networking opportunities.`,
  },
  {
    img: "./Images/swiper6.png",
    title: "Find Entrepreneurs & Investors ",
    description: `Create a space where entrepreneurs can seek investment opportunities and the
investors can discover promising ventures.`,
  },
];

export default function PropertyCards() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
    }, []);

    return (
        <div className='propertyCards lg:mt-[40px] mt-[10px]'>
            <div className='propertyCards-content '>
                <h2 className="howit-title lg:[30%] md:w-[45%] sm:w-[65%] w-[90%] text-[40px] lg:pr-44 pr-0" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500"> Let our Features Do the talk</h2>


                <div className="swiper-container-1">
                    <div className="swiper-navigation-buttonss">
                        <button ref={prevRef} className="swiper-button-prev1">
                            <ArrowLeftOutlined />
                        </button>
                        <button ref={nextRef} className="swiper-button-next2">
                            <ArrowRightOutlined />
                        </button>
                    </div>

                    <Swiper
                        slidesPerView={5}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            // when window width is >= 320px
                            120: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },

                            562: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            1092: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },

                            1600: {
                                slidesPerView: 5,
                                spaceBetween: 15
                            },

                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            swiperData.map((elm, idx)=> <SwiperSlide className="swiper-slide" key={idx}>
                                 <div className="my-card">
                                    <div className='w-[100%] bg-[#66666685] h-[.1px] my-10'></div>
                                     <img src={elm.img} alt="" style={{height:'40vh'}} className='rounded-t-xl'  />
                                     <h2 className='mt-5 font-bold pr-6'>
                                         {elm.title}
                                     </h2>
                                     <p>{elm.description}.</p>
                                 </div>
                             </SwiperSlide>)
                        }


                    </Swiper>
                </div>

            </div>
        </div>
    );
}

