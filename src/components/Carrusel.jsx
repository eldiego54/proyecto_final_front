


import { EmblaCarousel } from '@/components/Carrousel_auto'
import React from 'react'
import Brands from '../../data/products.json'


const Carrusel = () => {
  return (
    <>
    <div>
         <EmblaCarousel brands = {Brands} />
    </div>
    </>
  )
}

export default Carrusel