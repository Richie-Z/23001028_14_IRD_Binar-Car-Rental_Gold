import { FC, MouseEventHandler, useState } from 'react';
import './styles.scss'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '../Button';
import { CarCategoryEnum, CarType, ListCarsDTO, maximumCapacity } from '@/features/car';
import { listCars } from '@/features/car/api';
import { toast } from 'react-toastify';

type OptionType = {
  value: string,
  label: string
}

type SearchFormProps = {
  isSearching: boolean
  onSearchClick: (cars?: CarType[]) => void
}

const SearchForm: FC<SearchFormProps> = ({ isSearching, onSearchClick }) => {
  const [name, setName] = useState<string>()
  const [category, setCategory] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [status, setStatus] = useState<string>()

  const cattegoryOptions: OptionType[] = Object.values(CarCategoryEnum).map((category) => ({ value: category.toString(), label: maximumCapacity(category) }))

  const priceOptions: OptionType[] = [
    { value: "< Rp. 400.000", label: "< Rp. 400.000" },
    { value: "Rp. 400.000 - Rp. 600.000", label: "Rp. 400.000 - Rp. 600.000" },
    { value: "> Rp. 400.000", label: "> Rp. 400.000" },
  ]

  const statusOptions: OptionType[] = [
    { value: "false", label: "Available" },
    { value: "true", label: "Disewa" },
  ]

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    if (!isSearching) {
      onSearchClick()
      return;
    }

    const toastId = toast.loading("Searching cars...")
    event.preventDefault()
    const listCarDto: ListCarsDTO = {
      name: name,
      category: category,
      maxPrice: price === priceOptions[0].value ? 400000 : price === priceOptions[1].value ? 600000 : undefined,
      minPrice: price === priceOptions[2].value ? 400000 : price === priceOptions[1].value ? 400000 : undefined,
      isRented: status
    }

    try {
      const { data: { cars } } = await listCars(listCarDto)
      toast.update(toastId, { render: "Done", type: "success", isLoading: false, autoClose: 1000, style: { display: "none" } })
      onSearchClick(cars)
    } catch (error) {
      toast.update(toastId, { render: error.message ?? "Error Occured", type: "error", isLoading: false, autoClose: 1000 })
    }
  }

  return (
    <div className="search-container"
      onMouseEnter={() => document.body.classList.add('overlay')}
      onMouseLeave={() => document.body.classList.remove('overlay')}
    >
      <form action="" className="search-form">
        <div className="form-group">
          <p>Nama Mobil</p>
          <input type="text" placeholder="Ketik nama/tipe mobil" disabled={!isSearching} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <p>Kategori</p>
          <Dropdown options={cattegoryOptions} onChange={(arg) => setCategory(arg.value)} placeholder="Masukan Kapistas Mobil" disabled={!isSearching} />
        </div>
        <div className="form-group">
          <p>Harga</p>
          <Dropdown options={priceOptions} onChange={(arg) => setPrice(arg.value)} placeholder="Masukan Harga Sewa Perhari" disabled={!isSearching} />
        </div>
        <div className="form-group">
          <p >Status</p>
          <Dropdown options={statusOptions} onChange={(arg) => setStatus(arg.value)} placeholder="Pilih Status" disabled={!isSearching} />
        </div>
        <div>
          <Button title={isSearching ? 'Cari Mobil' : 'Edit '} onClick={handleSubmit} isSecondary={!isSearching} />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
