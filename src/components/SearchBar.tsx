import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import  { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
   onSearch : (searchText : string | null) => void
}

const SearchBar = ({onSearch} : Props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if(ref.current) onSearch(ref.current.value)
    }}>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
        <Input ref={ref} variant={'filled'} borderRadius={8} placeholder='Search game' />
    </InputGroup>
    </form>
  )
}

export default SearchBar