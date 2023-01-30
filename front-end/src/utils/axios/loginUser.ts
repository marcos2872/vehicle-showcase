import { AxiosError } from 'axios'
import { IUser } from '../../interfaces/IUser'
import api from './api'

type userType= {
  email: string
  password: string
}

export default async function loginUser (obj: userType): Promise<IUser | string> {
  try {
    const user = await api.post('/login', {
      ...obj
    })
    return user.data
  } catch (error) {
    const erro = (error as AxiosError).response?.status
    if (erro === 401) return 'Senha invalida'
    if (erro === 404) return 'E-mail não cadastrado'
    return 'Erro no servidor'
  }
}
