import { IUser } from '../../interfaces/IUser'
import api from './api'

type userType= {
  name: string
  email: string
  password: string
}

export default async function registerUser (obj: userType): Promise<IUser | string> {
  try {
    const user = await api.post('/user', {
      ...obj
    })
    return user.data
  } catch (error) {
    console.log((error as Error).message)
    return 'E-mail já cadastrado'
  }
}
