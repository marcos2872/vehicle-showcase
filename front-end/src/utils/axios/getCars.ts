import ICar from '../../interfaces/ICars'
import api from './api'

async function getCars (): Promise<ICar[] | any> {
  const cars = await api.get('/cars')
  return cars
}

export default getCars
