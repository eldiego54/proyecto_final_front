

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function Carrusel(props) {
  const { brands } = props
   
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, 
    [Autoplay( { delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false })])
 
    return (
    <>
    <div className = "w-screen h-max"  ref={emblaRef} >
      <div className = "flex gap-2">

          {brands.map((index) => (
             <a href={index.url} key={index.id} className="flex-[0_0_100%] mx-auto flex items-center justify-center">
                          <img className="w-full h-full object-fill" src={index.image}  /> 
             </a>
            
          ))}
      </div>
    </div>

   
    </>
    )
  }


