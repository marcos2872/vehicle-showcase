
import api from './api'

export default async function deletCar (id: string): Promise<number> {
  try {
    const delet = await api.delete('/car', {
      params: { id }
    })
    return delet.status
  } catch (error) {
    console.log(error)
    return 4
  }
}
