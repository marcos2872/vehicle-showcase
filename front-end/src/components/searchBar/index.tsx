import React, { useContext, useState } from 'react'
import Context from '../../context'
import getCars from '../../utils/axios/getCars'
import { IconsSearch, Input, InputComtainer, Main } from './searchBar.style'

const SearchBar: React.FC = () => {
  const { cars, setCars } = useContext(Context)
  const [input, setInput] = useState('')

  const heardleKeyUp = async (key: string): Promise<void> => {
    if (key === 'Enter') {
      if (input === '') {
        const { data } = await getCars()
        setCars(data)
        return
      }
      const search = cars.filter(({ model, brand }) => {
        if (brand.toLowerCase().includes(input.toLowerCase()) || model.toLowerCase().includes(input.toLowerCase())) {
          return true
        }
        return false
      })
      setCars(search)
    }
  }
  return (
    <Main>
      <InputComtainer>
        <Input
          placeholder='Busque por marca ou modelo'
          onChange={({ target }) => {
            setInput(target.value)
          }}
          onKeyUp={({ code }) => {
            heardleKeyUp(code)
          }}
          value={input}
        />
        <IconsSearch />
      </InputComtainer>
    </Main>
  )
}

export default SearchBar
