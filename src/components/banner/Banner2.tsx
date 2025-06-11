'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner2.css'

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';



const Banner2 = () => {
  const [workouts, setworkouts] = React.useState<any[] | null>(null)

  const getworkouts = async () => {
    let data: any = [
      {
        type: 'chest',
        imageUrl: 'https://images.unsplash.com/photo-1600037827534-5770c468049b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtvdXQlMjBmb3IlMjBnaXJsJTIwY2hlc3R8ZW58MHx8MHx8fDA%3D',
        durationInMin: 30
      },
        {
        type: 'Abs',
        imageUrl: 'https://images.unsplash.com/photo-1571388072750-31a921b3d900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dCUyMGZvciUyMGdpcmwlMjBhYnN8ZW58MHx8MHx8fDA%3D',
        durationInMin: 90
      },
        {
        type: 'Shoulder',
        imageUrl: 'https://images.unsplash.com/photo-1669502299593-5dbb23edfdb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtvdXQlMjBmb3IlMjBnaXJsJTIwc2hvdWxkZXJ8ZW58MHx8MHx8fDA%3D',
        durationInMin: 40
      },
        {
        type: 'Back',
        imageUrl: 'https://images.unsplash.com/photo-1522844831948-ec9400db7659?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya291dCUyMGZvciUyMGdpcmwlMjBiYWNrfGVufDB8fDB8fHww',
        durationInMin: 30
      },
        {
        type: 'Biceps',
        imageUrl: 'https://images.unsplash.com/photo-1629284295734-10c0005532e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtvdXQlMjBmb3IlMjBtYWxlJTIwQmljZXBzfGVufDB8fDB8fHww',
        durationInMin: 30
      },
        {
        type: 'Triceps',
        imageUrl: 'https://images.unsplash.com/photo-1689395269032-7e0ac12e4006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya291dCUyMGZvciUyMG1hbGUlMjBUcmljZXBzfGVufDB8fDB8fHww',
        durationInMin: 30
      },
        {
        type: 'Legs',
        imageUrl: 'https://images.unsplash.com/photo-1551984427-6d77a1918093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dCUyMGZvciUyMG1hbGUlMjBsZWdzfGVufDB8fDB8fHww',
        durationInMin: 30
      },
        {
        type: 'forarms',
        imageUrl: 'https://images.unsplash.com/photo-1679216129923-ad1bedf399e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtvdXQlMjBmb3IlMjBtYWxlJTIwZm9yYXJtc3xlbnwwfHwwfHx8MA%3D%3D',
        durationInMin: 30
      },
    ]
    setworkouts(data)
  }

  React.useEffect(() => {
    getworkouts()
  }, [])
  return (
    <div>
      <h1 className='mainhead1'>WORKOUTS</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          workouts && workouts.map((item, index) => {
            return (
              <SwiperSlide key={index} >
               <div className='custom-slide'
                style={{
                 backgroundImage: `url(${item.imageUrl || '/images/default.avif'})`,                
                }}

                onClick={() => {
                  window.location.href = `/workouts/${item.type}`
                }}

                >
                  <div className='custom-slide-content'>
                    <h2>{item.type}</h2>
                    <p>{item.durationInMin} min</p>
                  </div>
                </div>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Banner2