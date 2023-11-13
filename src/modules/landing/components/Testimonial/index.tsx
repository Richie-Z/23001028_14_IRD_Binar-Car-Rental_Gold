import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import './styles.scss'
import 'swiper/css';

type TestimonialType = {
  imgPath: string
  testimony: string
  name: string
}

export default function Testimonial() {
  const swiperRef = useRef<SwiperClass>();
  const testimonialItems: TestimonialType[] = [
    {
      imgPath: '/images/img-photo.png',
      testimony: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
      name: 'John Dee 32, Bromo'
    },

    {
      imgPath: '/images/img-photo.png',
      testimony: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
      name: 'John Dee 32, Bromo'
    },

    {
      imgPath: '/images/img-photo-2.png',
      testimony: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
      name: 'John Dee 32, Bromo'
    },
  ]
  return (
    <section id="testimonial">
      <div className="title-bx">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <Swiper
        onSwiper={(swiper) => swiperRef.current = swiper}
        className="carousel-item"
        loop={true}
        width={600}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 150, initialSlide: 0 },
          1024: { slidesPerView: 1, spaceBetween: 50, initialSlide: 1 },
        }
        }
      >
        {testimonialItems.map((val, index) => (
          <SwiperSlide className="item" key={index}>
            <div className="item-img">
              <img src={val.imgPath} alt={val.name} />
            </div>
            <div className="item-content">
              <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                {
                  Array(5).fill(null).map((_, index) => (
                    <path
                      key={index}
                      d={`M${8 + index * 16} 0L${9.79611 + index * 16} 5.52786H${16.6085 + index * 16}L${10.9062 + index * 16} 8.94427L${12.7023 + index * 16} 14.4721L${8 + index * 16} 11.0557L${3.29772 + index * 16} 14.4721L${5.09383 + index * 16} 8.94427L${0.391648 + index * 16} 5.52786H${6.16389 + index * 16}L${8 + index * 16} 0Z`}
                      fill="#F9CC00"
                    />
                  ))
                }
              </svg>
              <p className="the-testimony">{val.testimony}</p>
              <p className="author">{val.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="carousel-btn">
        <button onClick={() => {
          const { current: swiper } = swiperRef;
          const prevIndex = (swiper?.activeIndex ?? 0) - 1
          swiper?.slideTo(prevIndex < 0 ? testimonialItems.length - 1 : prevIndex);
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </button>
        <button className="active" onClick={() => {
          const { current: swiper } = swiperRef;
          const nextIndex = (swiper?.activeIndex ?? 0) + 1
          swiper?.slideTo(nextIndex >= testimonialItems.length ? 0 : nextIndex);
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section >

  )
}
