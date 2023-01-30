import ICar from '../../interfaces/ICars'
import api from './api'

async function getCarId (id: string): Promise<ICar | string> {
  try {
    const cars = await api.get(`/cars?id=${id}`)
    return cars.data
  } catch (error) {
    return 'Carro não encontrado'
  }
}

export default getCarId
