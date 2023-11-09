import { CarCategoryEnum } from "../enums"

export interface ListCarsDTO {
  name: string
  category?: CarCategoryEnum
  isRented?: boolean
  minPrice?: number
  maxPrice?: number
}
