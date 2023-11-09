import { CarCategoryEnum } from "../enums";

export const maximumCapacity = (category: CarCategoryEnum): string => category === CarCategoryEnum.small ? '2 - 4 Orang' : (category === CarCategoryEnum.medium ? '4 - 6 Orang' : '6 - 8 Orang')
