import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './categories.css'
import Loader from '../../shared/Loader.jsx'
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartConterxt } from '../context/Cart.jsx';
export default function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL_LINK}/categories`
    );
    return data;
  };

  const { data, isLoading } = useQuery("web_Catagories", getCategories);
  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <div className="Categories container mt-5">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={3.1}
        loop={true}
        autoplay={{
          delay:3000,
        }}
        navigation
        pagination={{ 
          clickable: true,
          
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {data?.categories.length?data?.categories.map((catagour)=>
          <SwiperSlide key={catagour._id}>
            <Link to={`/products/category/${catagour._id}`}>
            <div>
            <img src={catagour.image.secure_url} className='rounded-circle' />
            <h2>{catagour.name}</h2>
            </div>
            </Link>

          </SwiperSlide>
        ):"no data available"
      }

      </Swiper>
      <div className='swiper-custom-pagination'></div>
    </div>
  );
}
