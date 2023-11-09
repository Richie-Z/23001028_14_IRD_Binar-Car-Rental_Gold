import { CarCategoryEnum } from ".."

export interface CarType {
  id: number
  name: string
  category: CarCategoryEnum
  price: number
  status: boolean
  image: string
}
