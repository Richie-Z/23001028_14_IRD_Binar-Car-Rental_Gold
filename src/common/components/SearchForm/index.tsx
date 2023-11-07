import './styles.scss'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

type OptionType = {
  value: string,
  label: string
}
const SearchForm = () => {
  const cattegoryOptions: OptionType[] = [
    { value: "2 - 4 Orang", label: "2 - 4 Orang" },
    { value: "4 - 6 Orang", label: "4 - 6 Orang" },
    { value: "6 - 8 Orang", label: "6 - 8 Orang" },
  ]
  const priceOptions: OptionType[] = [
    { value: "< Rp. 400.000", label: "< Rp. 400.000" },
    { value: "Rp. 400.000 - Rp. 600.000", label: "Rp. 400.000 - Rp. 600.000" },
    { value: "> Rp. 400.000", label: "> Rp. 400.000" },
  ]
  const statusOptions: OptionType[] = [
    { value: "Disewa", label: "Disewa" },
  ]
  return (
    <div className="search-container"
      onMouseEnter={() => document.body.classList.add('overlay')}
      onMouseLeave={() => document.body.classList.remove('overlay')}
    >
      <form action="" className="search-form">
        <div className="form-group">
          <p>Nama Mobil</p>
          <input type="text" placeholder="Ketik nama/tipe mobil" />
        </div>
        <div className="form-group">
          <p>Kategori</p>
          <Dropdown options={cattegoryOptions} onChange={(arg) => console.log(arg)} placeholder="Masukan Kapistas Mobil" />
        </div>
        <div className="form-group">
          <p>Harga</p>
          <Dropdown options={priceOptions} onChange={(arg) => console.log(arg)} placeholder="Masukan Harga Sewa Perhari" />
        </div>
        <div className="form-group">
          <p >Status</p>
          <Dropdown options={statusOptions} onChange={(arg) => console.log(arg)} placeholder="Pilih Status" />
        </div>
        <div>
          <button className="btn">Cari Mobil</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
