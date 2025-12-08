

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel(props) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, 
    [Autoplay( { delay: 1700 , stopOnMouseEnter: true, stopOnInteraction: false })])
  const { brands } = props
 


  return (
    <>
    <div className = "container"  ref={emblaRef}>
      <div className = "slides_container">

          {brands.map((index) => (
             <a href={index.url} key={index.id} className="img_slides">
                          <img className="images" src={index.image} alt={index.brand} />
             </a>
            
          ))}
      </div>
    </div>
    <style jsx>{

    `
    .container     {
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    max-width: 100%;
                    height: 9rem;
                    width: 90rem;
                   }

    .slides_container {
                    display: flex;
                    flex-direction: row;
                    height: 20rem;
                    width: 80rem;
                    gap: 1%;
                    }
                  
    .img_slides     {    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 0 0 15%;
                    min-width: 10%;
                    height: 15rem;
                    width: 5rem;
                    marginTop: 5rem;
                   
                    }
    .images  {
                    object-fit: contain;
                    width: 30%;
                    height: 15rem;
                    margin-top: 1rem;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    margin-left: 1.5rem;
                    max-width: 100%;
                    max-height: 100%;
                    }
    .images:hover { 
                    transform: scale(1.55);
                   }
    
    
    @media (min-width: 768px) {   
    
    .container     {
                    overflow: hidden;
                    maxWidth: 200%;
                    height: 18rem;
                    width: 80rem;
                    margin: auto;
                    }

    .slides_container {
                    display: flex;
                    flex-direction: row
                    height: 20rem;
                    width: 30rem;
                    }
    .img_slides    {    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 0 0 30%;
                    min-width: 10%;
                    height: 9rem;
                    width: 2rem;
                    margin-top: 5rem;
                    margin-right: 5rem;
                    }
    
    .images {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 10rem;
                width: 60%;
                object-fit: contain;
                margin-top: 1rem;
                margin-left: 1.5rem;
                max-width: 100%;
                max-height: 100%;
               }
    .images:hover { 
                transform: scale(1.5);
                   }
    }` 
    }</style>
   
    </>
    )
  }


