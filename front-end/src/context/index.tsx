/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'
import ICar from '../interfaces/ICars'

type context = {
  cars: ICar[] | []
  setCars: any
  edit: boolean
  setEdit: any
}

export const Context = createContext({} as context)

export default Context
