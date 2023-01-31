import { AxiosError } from 'axios'
import api from './api'

export default async function putCar (id: string , data: any, token: string): Promise<any> {
  try {
    const post = await api.put(`/car/${id}`, data,
      {
        headers: {
          authorization: token
        }
      }
    )
    return post.data.message
  } catch (error) {
    const { response } = error as AxiosError
    if (response?.status === 403) return 'Usuário não tem permissão de administrador'
    if (response?.status === 401) return 'Usuário não autenticado'
    return 'Erro no servidor'
  }
}
