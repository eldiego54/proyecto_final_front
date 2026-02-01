
import Promociones from "../components/Promociones";
import Navbar_cart from "../components/Navbar_cart";
import ProductList from "../components/ProductList";
import Images from '../../data/images.json'
import { Carrusel } from '../components/Carrousel_auto'
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header con carrito y busqueda*/}
      <Navbar_cart />
      <div className="pt-2">
        <img src="/assets/images/imagen_fondo1.png" alt="Logo" className="mt-48 w-full mx-auto md:mt-20" />
        {/* Título principal */}
        <section className="container mx-auto px-4 mt-20">
          <h1 className="text-center text-xl font-semibold text-sky-950 font-serif md:text-4xl">Venta de articulos electrónicos - La mejor calidad</h1>
          <Carrusel brands={Images} />
          <div className="mt-20 bg-blue-700 border-2 border-gray-300 rounded-lg p-6 shadow-md max-w-sm md:max-w-md mx-auto">
              <p className="text-center text-sm font-semibold text-white mt-2 md:text-2xl">
                  PAGA EN CUOTAS - PAGA COMO QUIERAS
              </p>
          </div>
        </section>
        <Promociones />
        <div className="mt-20 bg-blue-700 border-2 border-gray-300 rounded-lg p-6 shadow-md max-w-sm md:max-w-md mx-auto">
             <h1 className="text-center text-sm font-semibold text-white mt-2 md:text-2xl">Algunos de nuestros productos:</h1>
        </div>
        {/* Lista de productos */}
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}

