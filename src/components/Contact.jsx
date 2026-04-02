'use client';

import Navbar_cart from '../components/Navbar_cart';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [aceptaPrivacidad, setAceptaPrivacidad] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.asunto.trim()) newErrors.asunto = 'Requerido';
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'Mínimo 10 caracteres';
    }
    if (!aceptaPrivacidad) newErrors.privacidad = 'Debes aceptar la política';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');
    try {
      // Aquí envías a tu API, EmailJS, etc. Ejemplo con fetch
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, aceptaPrivacidad }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        setAceptaPrivacidad(false);
      } else {
        throw new Error('Error en envío');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-md mx-auto py-48 px-4 md:max-w-2xl md:py-12 md:px-4">
      <div className="text-center mb-12">
        <h2 className="text-lg font-bold text-gray-900 mb-4 md:text-3xl">Contacto</h2>
        <p className="text-sm text-gray-600 mb-8 md:text-lg">
          Ponte en contacto con nosotros. Nos encantaría saber de ti.
        </p>
        <p className="text-lg font-semibold text-gray-900 md:text-xl">Envíanos un mensaje</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block text-xs font-medium text-gray-700 mb-2 md:text-sm">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.nombre ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tu nombre completo"
          />
          {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2 md:text-sm">
            Dirección de correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="asunto" className="block text-xs font-medium text-gray-700 mb-2 md:text-sm">
            Asunto <span className="text-red-500">*</span>
          </label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            required
            value={formData.asunto}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
              errors.asunto ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Asunto del mensaje"
          />
          {errors.asunto && <p className="mt-1 text-sm text-red-600">{errors.asunto}</p>}
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-xs font-medium text-gray-700 mb-2 md:text-sm">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            value={formData.mensaje}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-vertical ${
              errors.mensaje ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Mínimo 10 caracteres. Sé específico para que podamos ayudarte mejor."
          />
          {errors.mensaje && <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>}
        </div>

        <div className="flex items-start">
          <input
            id="privacidad"
            type="checkbox"
            checked={aceptaPrivacidad}
            onChange={(e) => setAceptaPrivacidad(e.target.checked)}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            required
          />
          <label htmlFor="privacidad" className="ml-3 text-xs text-gray-700 leading-6 md:text-sm">
            He leído y acepto{' '}
            <a
              href="https://laelectronicaonline.com.ar/politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Política de privacidad
            </a>{' '}
            y consiento el tratamiento de mis datos personales para responder a mi consulta, de acuerdo con el Reglamento General de Protección de Datos (RGPD).
          </label>
        </div>
        {errors.privacidad && <p className="text-sm text-red-600">{errors.privacidad}</p>}

        <p className="text-xs text-gray-500 mt-2">
          * Campos obligatorios
        </p>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-4 px-6 font-semibold text-white rounded-lg transition-all duration-200 ${
            status === 'sending'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
          }`}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center font-medium bg-green-50 p-4 rounded-lg">
            ¡Mensaje enviado correctamente!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center font-medium bg-red-50 p-4 rounded-lg">
            Error al enviar. Inténtalo de nuevo.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;