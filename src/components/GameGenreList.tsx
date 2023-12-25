import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    onSelectGenre :(genre : Genre | null) => void;
    selectedGenre : Genre | null;
}

const GameGenreList = ({onSelectGenre, selectedGenre} : Props) => {
    const  { data, isLoading, error} = useGenres()

    if(isLoading) return <Spinner/>

    if(error) return null;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
    <List>
        {data.map(genre => 
        <ListItem key={genre.id} paddingY={'8px'}>
            <HStack>
                <Image boxSize='32px' objectFit='cover' src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
                <Button textAlign='center' whiteSpace='normal' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre)} variant='link' fontSize={'xl'}>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GameGenreList