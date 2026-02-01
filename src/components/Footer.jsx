'use client'; 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

   
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay
      setMessage('✅ ¡Suscrito exitosamente! Gracias por unirte.');
      setEmail('');
    } catch (error) {
      setMessage('❌ Error al suscribirse. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex bg-blue-700 h-40 w-full items-center gap-8 p-8 justify-center'>
        <span className='font-bold text-xs md:text-base'>Seguinos en nuestras redes sociales</span>
        <div className='flex gap-6'>
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-blue-200" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-300" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-blue-300" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl hover:text-red-400" />
          </a>
        </div>
      </div>
      <div className='grid grid-cols-2 text-sm bg-blue-950 p-12 text-white h-96 w-full md:text-base md:grid-cols-4'>
        <div><h1 className='font-bold'>DESTACADOS</h1>
             <ul className='text-xs mt-5 md:text-sm'>
             <li><a href="">Tecnología</a></li>
             <li><a href="">Smart TV y accesorios</a></li>
             <li><a href="">Celulares y accesorios</a></li>
             <li><a href="">Computación</a></li>
             <li><a href="">Audio y video</a></li></ul>
        </div>
        <div><h1 className='font-bold'>INFORMACION DE COMPRAS</h1>
             <ul className='text-xs mt-5 md:text-sm'>
             <li><a href="">Promociones bancarias</a></li>
             <li><a href="">Politica de cambios y devoluciones</a></li>
             <li><a href="">Terminos y condiciones</a></li>
             <li><a href="">Botón de arrepentimiento</a></li>
             <li><a href="">Mapa de sitio</a></li></ul>
        </div>
        <div><h1 className='font-bold'>LEGALES</h1>
             <ul className='text-xs mt-5 md:text-sm'>
             <li><a href="">Información al usuario financiero</a></li>
             <li><a href="">Quejas y reclamos</a></li>
             <li><a href="">Terminos y condiciones</a></li>
             <li><a href="">Contratos</a></li>
             <li><a href="">Defensa al consumidor</a></li></ul>
        </div>
        <div><h1 className='font-bold'>CONTACTO</h1>
             <ul className='text-xs mt-5 md:text-sm'>
             <li><a href=""><FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />(+54 11) 7078-1280</a></li>
             <li><a href="">Electronic Store Shop - Avenida de Mayo 3121 CABA</a></li>
             <li><a href=""><FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />info@ESShop.com.ar</a></li>
             </ul>
        </div>
      </div>
      
       {/* Suscripción */}
      <div className='bg-gradient-to-r from-blue-800 to-blue-900 w-full py-12 px-8'>
        <div className='max-w-md mx-auto text-center text-white'>
          <h3 className='text-2xl md:text-3xl font-bold mb-4'>📧 Suscribite a nuestro catalogo digital</h3>
          <p className='text-lg mb-8 opacity-90'>Recibí ofertas exclusivas y novedades en tu email</p>
          
          <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-base placeholder-gray-500'
              required
            />
            <button
              type="submit"
              disabled={loading || !email}
              className='px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
            >
              {loading ? '⏳ Enviando...' : 'Suscribirme'}
            </button>
          </form>
          
          {message && (
            <p className='mt-4 text-sm font-medium text-green-300 animate-fade-in'>{message}</p>
          )}
        </div>
      </div>
      <div className='bg-gray-700 h-16 w-full'>Copyright© 2026 - Electronic Store Shop© - Todos los derechos reservados</div>
    </div>
  );
};

export default Footer;
