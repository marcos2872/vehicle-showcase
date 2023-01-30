
import { AxiosError } from 'axios'
import api from './api'

export default async function deletCar (id: string, token: string): Promise<string> {
  try {
    const delet = await api.delete(`/car/${id}`, {
      headers: {
        authorization: token
      }
    })
    return delet.data.message
  } catch (error) {
    const { response } = error as AxiosError
    if (response?.status === 403) return 'Usuário não tem permissão de administrador'
    if (response?.status === 401) return 'Usuário não autenticado'
    return 'Erro no servidor'
  }
}
