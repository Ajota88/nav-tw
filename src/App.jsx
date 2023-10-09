import Navbar from "./components/Navbar";
import Carousel from "./components/Carrusel";
import Socios from "./components/Socios";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Nosotros />
      <Socios />
      <Servicios />
      <Footer />
    </main>
  );
};
export default App;
