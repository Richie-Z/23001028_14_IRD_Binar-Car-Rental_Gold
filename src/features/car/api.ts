import axios, { AxiosResponse } from "axios";
import { CarType, ListCarsDTO } from ".";

const API_CAR_URL = "https://api-car-rental.binaracademy.org/customer"

export const listCars = async (query?: ListCarsDTO): Promise<AxiosResponse<{ cars: CarType[] }>> => await axios.get(`${API_CAR_URL}/v2/car`, { params: query })

export const getCar = async (carId: string | number): Promise<AxiosResponse<CarType>> => await axios.get(`${API_CAR_URL}/car/${carId}`)
