import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectOrder : (order : string ) => void;
    selectedOrder : string | null;
}

const SortSelector = ({onSelectOrder,selectedOrder} : Props) => {
    const sortOrder = [
        { value:'', label:'Relevance'},
        { value:'-added', label:'Date added'},
        { value:'name', label:'Name'},
        { value:'-released', label:'Release date'},
        { value:'-metacritic', label:'Popularity'},
        { value:'-rating', label:'Average rating'}
    ]

    const currentOrder = sortOrder.find(order => order.value === selectedOrder)
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by : {currentOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
            {sortOrder.map(order => <MenuItem onClick={()=>onSelectOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  )
}

export default SortSelector