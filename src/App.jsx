import Navbar from "./components/Navbar";
import Carousel from "./components/Carrusel";
import Socios from "./components/Socios";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Nosotros />
      <Socios />
      <Servicios />
      <Contacto />
      <Footer />
    </main>
  );
};
export default App;
