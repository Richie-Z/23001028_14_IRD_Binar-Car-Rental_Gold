import './styles.scss'

const SearchForm = () => {
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
          <p >Kategori</p>
          <select name="" id="">
            <option value="" disabled selected hidden>Masukan Kapistas Mobil</option>
            <option value="">2 - 4 Orang</option>
            <option value="">4 - 6 Orang</option>
            <option value="">6 - 8 Orang</option>
          </select>
        </div>
        <div className="form-group">
          <p >Harga</p>
          <select name="" id="">
            <option value="" disabled selected hidden>Masukan Harga Sewa per Hari</option>
            <option value="">&lt; Rp. 400.000</option>
            <option value="">Rp. 400.000 - Rp. 600.000</option>
            <option value="">&gt; Rp. 400.000</option>
          </select>
        </div>
        <div className="form-group">
          <p >Status</p>
          <select name="" id="">
            <option value="" disabled selected hidden>Pilih Status</option>
            <option value="">Disewa</option>
          </select>
        </div>
        <div>
          <button className="btn">Cari Mobil</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
