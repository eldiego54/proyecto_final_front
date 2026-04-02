

import Footer from "../components/Footer";
import Navbar_cart from "../components/Navbar_cart";

export default function product() {
  return (
    <>
      <Navbar_cart />
      <section>
      <h1 className="pt-52 font-bold text-sm md:pt-5 mb-8 md:text-xl">En nuestra pagina podras encontrar una gran variedad de ofertas en los siguientes productos</h1>
      <ul className="text-sm mb-8 md:text-xl">
        <li>Computadoras</li>

        <li>Televisores</li>

        <li>Consolas</li>

        <li>Accesorios</li>

      </ul>
      <p>Solicita nuestras actualizaciones y catalogo personalizado por Whatsapp</p>


      </section>
      <Footer />
    </>

  );
}
