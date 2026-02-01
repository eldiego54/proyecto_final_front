import React from 'react'
import { useState } from 'react';



const Promociones = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rectanguloSeleccionado, setRectanguloSeleccionado] = useState('');

  const abrirModal = (nombre) => {
    setRectanguloSeleccionado(nombre);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setRectanguloSeleccionado('');
  };

  return (
    <>
      
      {/* Contenedor de 4 rectángulos */}
      {/*<div className="grid md:flex justify-center items-center min-h-screen bg-gray-100 py-12">*/}
       <div className= 'flex  md:flex-row md:gap-4 gap-3 p-4 max-w-6xl mx-auto'> 
        <div className="flex flex-col justify-center items-center w-full gap-y-4 mt-2 md:flex md:flex-row gap-12">
          {/* Cuadro 1 */}
          <button
            onClick={() => abrirModal('Cuadro 1')}
            className="w-60 h-15 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-white flex flex-col items-center justify-center text-black font-semibold relative overflow-hidden group p-6"
          >
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-300 origin-center" />
            <span className="z-10 text-lg">Pagá en cuotas</span>
            <span className="z-10 text-sm text-blue-700 opacity-90 mt-1">Ver promociones bancarias</span>
          </button>

          {/* Cuadro 2 */}
          <button
            onClick={() => abrirModal('Cuadro 2')}
            className="w-60 h-15 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-white flex flex-col items-center justify-center text-black font-semibold relative overflow-hidden group p-6"
          >
            <div className="flex justify-start inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-300 origin-center"/>
            <span className="flex z-10 text-lg">Tarjetas de débito</span>
            <span className="flex z-10 text-sm text-blue-700 opacity-90 mt-1">Ver más</span>
          </button>

          {/* Cuadro 3 */}
          <button
            onClick={() => abrirModal('Cuadro 3')}
            className="w-60 h-15 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-white flex flex-col items-center justify-center text-black font-semibold relative overflow-hidden group p-6"
          >
            <div className="flex inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-300 origin-center" />
            <span className="flex z-10 text-lg">Efectivo</span>
            <span className="flex z-10 text-sm text-blue-700 opacity-90 mt-1">Ver más</span>
          </button>

          {/* cuadro 4 */}
          <button
            onClick={() => abrirModal('Cuadro 4')}
            className="w-60 h-15 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-white flex flex-col items-center justify-center text-black font-semibold relative overflow-hidden group p-6"
          >
            <div className="flex inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-300 origin-center" />
            <span className="flex z-10 text-lg">Otros medios de pago</span>
            <span className="flex z-10 text-sm text-blue-700 opacity-90 mt-1">Ver todos</span>
          </button>
        </div>
      </div>
      {/* Modal */} 
      {modalAbierto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full h-[90vh] overflow-y-auto transform animate-in slide-in-from-bottom-4 duration-300">
            {/* Header del modal */}
            <div className="p-8 pb-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Medios de pago:
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
                Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.
              </div>
              <div className='mt-4 font-bold mb-2'>Tarjetas de crédito en hasta 24 cuotas*</div>
              <div className='mt-4 flex flex-wrap justify-start gap-4 sm:gap-6 md:gap-8'><img src = '/assets/ofertas/ofertas/amex.svg'/>
                                <img src = '/assets/ofertas/ofertas/argen.svg' className="h-10 w-auto sm:h-12" alt="Argen"/>
                                <img src = '/assets/ofertas/ofertas/cabal.svg' className="h-10 w-auto sm:h-12" alt="Cabal"/>
                                <img src = '/assets/ofertas/ofertas/club.svg' className="h-10 w-auto sm:h-12" alt="Club"/>
                                <img src = '/assets/ofertas/ofertas/mastercard.svg' className="h-10 w-auto sm:h-12" alt="Master"/>
                                <img src = '/assets/ofertas/ofertas/visa.svg' className="h-10 w-auto sm:h-12" alt="Visa"/>
                                <img src = '/assets/ofertas/ofertas/naranja.svg' className="h-10 w-auto sm:h-12" alt="Naranja"/>
              </div>
              <div className='mt-4 italic font-thin text-sm text-gray-600 leading-relaxed'>*La cantidad de cuotas puede variar según la tarjeta</div>
              <div className='mt-12 font-bold mb-2'>Tarjetas de débito</div>
              <div className='mt-4 flex flex-wrap justify-start gap-4 sm:gap-6 md:gap-8'>
                      <img src='/assets/ofertas/ofertas/debito-master.svg' className="h-10 w-auto sm:h-12" alt="Master" />
                      <img src='/assets/ofertas/ofertas/debito-visa.svg' className="h-10 w-auto sm:h-12" alt="Visa" />
                      <img src='/assets/ofertas/ofertas/debito-maestro.svg' className="h-10 w-auto sm:h-12" alt="Maestro" />
                      <img src='/assets/ofertas/ofertas/debito-cabal.svg' className="h-10 w-auto sm:h-12" alt="Cabal" />
              </div>
              <div className='mt-12 font-bold mb-2'>Efectivo</div>
              <div>Es muy simple: cuando termines tu compra, te daremos las instrucciones para que sepas cómo y dónde pagarla.</div>
              <div className='flex justify-start gap-10 flex-row '>
                <div>
                  <img src='/assets/ofertas/ofertas/pagofacil.svg' className="h-0 w-auto mt-2 sm:h-12" alt="Pagofacil"/>
                </div>
                  <img src='/assets/ofertas/ofertas/rapipagoo.svg' className="h-0 w-auto mt-6 sm:h-5" alt="Rapipago"/>
                </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Promociones;

 