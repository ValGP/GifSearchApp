

import { useFectchGifs } from '../hooks/useFectchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
  
    const {images, isLoading} = useFectchGifs(category)

    // const [images, setImages] = useState([])



    // useEffect( () => {
    //     getGifs(category)
    //         .then (newImages => setImages(newImages))

    // }, [] )


    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className='card-grid'>
                {
                    images.map( (image) => 
                    (
                        <GifItem key={image.id}
                        { ...image }
                        /> 
                    )
                        
                    )}
                
            </div>
        </>
    )
}
