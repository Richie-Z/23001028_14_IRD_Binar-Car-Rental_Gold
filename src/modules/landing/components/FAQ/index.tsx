import { DetailProps, Details } from '@/common/components/Details'
import './styles.scss'

export default function FAQ() {
  const lorem = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  const faqLists: DetailProps[] = [
    { summary: "Apa saja syarat yang dibutuhkan?", description: lorem },
    { summary: "Berapa hari minimal sewa mobil lepas kunci?", description: lorem },
    { summary: "Berapa hari sebelumnya sabaiknya booking sewa mobil?", description: lorem },
    { summary: "Apakah Ada biaya antar-jemput?", description: lorem },
    { summary: "Bagaimana jika terjadi kecelakaan", description: lorem },
  ]

  return (
    <section id="faq">
      <div className="left">
        <div className="title-bx">
          <h3>Frequently Asked Question</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="right">
        {faqLists.map((val, i) => (
          <Details key={i} item={val} />
        ))}
      </div>
    </section>

  )
}
