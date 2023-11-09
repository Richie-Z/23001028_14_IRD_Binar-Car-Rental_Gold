import './styles.scss'

type AboutType = {
  title: string
  items: string[]
}
export default function AboutPacket() {
  const abouts: AboutType[] = [
    {
      title: "Include", items: [
        "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
        "Sudah termasuk bensin selama 12 jam",
        "Sudah termasuk Tiket Wisata",
        "Sudah termasuk Pajak",
      ]
    },
    {
      title: "Exlude", items: [
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
      ]
    },
    {
      title: "Refund, Reschedule, Overtime", items: [
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
        "Tidak termasuk biaya makan sopir Rp 75.000/hari",
        "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
        "Tidak termasuk akomodasi penginapan",
      ]
    }
  ]
  return (
    <div className="detail-left">
      <p className="detail-title">Tentang Paket</p>
      {abouts.map((val, i) => (
        <div className="detail-items" key={i}>
          <p className="detail-title">{val.title}</p>
          <ul>
            {val.items.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  )
}
