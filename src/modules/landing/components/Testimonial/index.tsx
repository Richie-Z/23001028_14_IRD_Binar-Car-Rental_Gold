import './styles.scss'

type TestimonialType = {
  imgPath: string
  testimony: string
  name: string
}

export default function Testimonial() {
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
      imgPath: '/images/img-photo.png',
      testimony: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”',
      name: 'John Dee 32, Bromo'
    }
  ]
  return (
    <section id="testimonial">
      <div className="title-bx">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="carousel-item">
        {testimonialItems.map((val, index) => (
          <div className="item" key={index}>
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
          </div>
        ))}
      </div>
      <div className="carousel-btn">
        <button>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </button>
        <button className="active">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#222222" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>

  )
}
