import React from 'react'
import { useQuery } from 'react-query'
import {getData, noPicture, img_300} from '../util'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault();
const responsive={
    0:{items:3},
    512:{items:5},
    1024:{items:7},
}

export const PersonCarousel = ({id}) => {

    //console.log('carousel: ' ,type,id);

    const urlCredits =`https://api.themoviedb.org/3/person/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}` 
    const {data, status} = useQuery(['credits', (urlCredits)], getData)

    status=='success' && console.log(data.cast);

    const items=status=='success' ?  
            data.cast.map(obj=>(
                <div className='carousel-item'>
                    <img className="carousel-img" src={obj.poster_path ? img_300+obj.poster_path  : noPicture} alt={obj?.title} 
                    onDragStart={handleDragStart} />
                    <b className='carousel-text'>{obj?.title}</b>
                </div>
            ))
            : []

  return (

        <AliceCarousel
            mouseTracking autoPlay infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
        />  


)
}
