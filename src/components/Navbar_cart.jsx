'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from 'lucide-react'; 
import { Search } from 'lucide-react';// Icono de carrito de compras
import { CartContext } from "../context/CartContext";
import { useState, useEffect, useContext } from 'react';
 import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar_cart() {
  
  const [isOpen, setIsOpen] = useState(false); // estado inicialmente cerrado
  const toggleMenu = () => setIsOpen(!isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const { cart } = useContext(CartContext);
  const delay= 500;
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  useEffect(() => {
    // Trigger animación después de montar
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     
      <header className="bg-blue-950 shadow-lg fixed w-full z-40 top-0 md:relative md:shadow-none">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            
            {/* Logo - visible siempre */}
            <div className={`logo-container transition-all duration-500 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'}`}
            >
                   <Image src= "/assets/Dynamic Electronics Store Logo.png"  width={200} height={100} />
            </div>

            {/* Menú Desktop: oculto mobile, visible md+ */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="md:flex justify-between items-center gap-6">
                <a href="/search"><Search className="md:flex items-center justify-center text-white w-8 h-8  hover:text-gray-500"  />
                {/*<div>
                    <a href="#services" className="text-white hover:text-gray-900 transition-colors font-medium">Haga su pedido</a>
                </div>*/}
              </a>
              <a href="/cart" className="text-white hover:text-gray-500 transition-colors font-medium">
                <ShoppingCartIcon size={30} />
                   {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
             )}</a></div>
            </nav>

            {/* Botón Hamburguesa: SOLO mobile */}
           
             
              <div className="relative max-w-md md:hidden">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="w-40 h-10 pl-12 pr-15 py-3 border text-xs border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
           
            <div className="flex gap-8 md:hidden">
              <div><a href="/cart" className="text-white hover:text-gray-500 transition-colors font-medium">
                <ShoppingCartIcon size={30} />
                   {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems}
                    </span>
              )}</a>
              </div>
              <div>
              <button onClick={toggleMenu} className="p-2 rounded md focus:outline-none focus:ring-white-400 "
                aria-label="Abrir menú">
                <div className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                  <span className={`block absolute h-0.5 w-6 sm bg-white transition-all duration-300 ease-out ${
                    isOpen 
                      ? 'rotate-45 translate-y-2.5' 
                      : 'translate-y-0 rotate-0'
                  }`} />
                  <span className={`block absolute h-0.5 w-6 sm bg-white transition-all duration-300 ease-out ${
                    isOpen 
                      ? 'opacity-0' 
                      : 'opacity-100 delay-200 translate-y-1.5'
                  }`} />
                  <span className={`block absolute h-0.5 w-6 sm bg-white transition-all duration-300 ease-out ${
                    isOpen 
                      ? 'rotate-(-45deg) translate-y-(-2.5px)' 
                      : 'translate-y-3 rotate-0 delay-300'
                  }`} />
                </div>
              </button>
              </div>
            </div>
            </div>
          </div>
        <div>
         <nav className="hidden md:flex justify-end items-end pr-10 gap-12 space-x-8">
              <a href="#home" className="text-white hover:text-gray-500 transition-colors font-medium">Inicio</a>
              <a href="#about" className="text-white hover:text-gray-500 transition-colors font-medium">Productos</a>
              <a href="#services" className="text-white hover:text-gray-500 transition-colors font-medium">Sobre nosotros</a>
              <a href="#contact" className="text-white hover:text-gray-500 transition-colors font-medium">Contacto</a>
        </nav>
            </div>
      

      </header>

      {/* Menú Móvil: slide down desde arriba */}
      <div className={`md:hidden fixed inset-0 z-50 bg-white transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col justify-start h-full pt-20 px-6 pb-12 space-y-6">
          <nav className="flex flex-col space-y-6 text-center">
            <a 
              href="#home" 
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Inicio                            
            </a>
            <Link 
              href="/Productos" 
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Productos
            </Link>
            <Link 
              href="/Nosotros" 
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay backdrop para cerrar */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}

