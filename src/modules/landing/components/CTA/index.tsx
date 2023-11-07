import Button from "@/common/components/Button"
import "./styles.scss"

export default function CTA() {
  return (
    <section id="cta-banner">
      <div className="title-bx">
        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. </p>
        <Button title="Mulai Sewa Mobil" to="search" />
      </div>
    </section>
  )
}

