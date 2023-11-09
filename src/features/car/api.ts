import axios, { AxiosResponse } from "axios";
import { CarType, ListCarsDTO } from ".";

export const listCars = async (query?: ListCarsDTO): Promise<AxiosResponse<{ cars: CarType[] }>> => await axios.get("https://api-car-rental.binaracademy.org/customer/v2/car", { params: query })
