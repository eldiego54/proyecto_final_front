

import Footer from "../components/Footer";
import Navbar_cart from "../components/Navbar_cart";

export default function about() {
  return (
    <>
      <Navbar_cart />
      <section>
      <h1 className="mt-48 text-xs font-thin md:text-lg md:mt-10">ELECTRONIC Store Shop SRL nació en 2005 en Buenos Aires creada por un técnico electrónico apasionado que empezó reparando radios y TVs en su pequeño taller familiar. Con solo 20 m² y un capital inicial muy escaso, vendiamos componentes electrónicos traídos desde el extranjero, atendiendo a vecinos y pequeños negocios locales. Nuestro lema era simple: "Calidad al precio justo".
      </h1>
      <p className="mt-4 font-extrabold">Crecimiento y Expansión</p>
      <h1 className="mt-4 text-xs font-thin md:text-lg">En 2010, la empresa dio un salto de expansión al mudarse a un local de 150 m² y diversificar su oferta con televisores LED, notebooks y celulares. Ese año mejoramos notablemente la facturacion y contratamos nuestros primeros 3 empleados. La crisis del campo 2008 nos benefició cuando los productores locales buscaron equipos de comunicación satelital. Para 2015, ya teniamos nuestra tienda online y entregas en un radio de 200 km.
      </h1>
      <p className="mt-4 font-extrabold">Innovación Digital</p>

      <h1 className="mt-4 mb-4 text-xs font-thin md:text-lg">La pandemia de 2020 fue el despegue: comenzo el furor del e-commerce con entregas express y soporte remoto vía WhatsApp. En 2022, inauguramos un centro de servicio técnico propio con certificación IRAM. Hoy contamos mas de 25 empleados y presencia en 5 provincias del interior.
      Hoy, gracias a nuestros clientes, ELECTRONIC Store Shop SRL se destaca por su servicio postventa impecable y precios competitivos. Gracias por elegirnos siempre
      </h1></section>
      
      <Footer />
    </>

  );
}


