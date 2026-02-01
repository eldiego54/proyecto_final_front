import React from 'react'
import { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";


const Modal_compra = (props) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const { addToCart } = useContext(CartContext);
  const{product}=props;
  const abrirModal = (nombre) => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      
      {/* Modal de compra */}
      
       <div className= 'flex md:flex-row md:gap-4 p-4 max-w-6xl mx-auto'> 
        <div className="flex flex-row justify-center items-center w-full gap-y-8 mt-2 md:flex md:flex-row gap-12">
          <button
            onClick={() => abrirModal()}
            className="w-60 h-15 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-blue-700 hover:bg-blue-600 flex flex-col items-center justify-center text-white font-semibold relative overflow-hidden group p-6"
          > 
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-300 origin-center" />
            COMPRAR
            
          </button>

        </div>
      </div>
      {/* Modal */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full h-96 overflow-y-auto transform animate-in slide-in-from-bottom-4 duration-300 md:max-w-2xl md:h-[90vh]">
            {/* Header del modal */}
            <div className="p-8 pb-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 md:text-2xl">
                  {product.name}
                </h2>
                <button
                  onClick={cerrarModal}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-8">
              <div className="text leading-relaxed">
                <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
              </div>
              <div className='mt-1 font-bold mb-2 md:mt-4'>Especificaciones tecnicas*</div>
              
              <div className='mt-4 italic font-thin text-sm text-gray-600 leading-relaxed'>{product.description}</div>
            <button
            
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            IR A COMPRAR
          </button>
            <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Agregar al carrito
          </button>
              </div>
              <div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal_compra;