import Navbar from "./components/Navbar";
import Carousel from "./components/Carrusel";
import Socios from "./components/Socios";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <Carousel />
      </div>
      <div id="nosotros" className="py-10 px-4">
        <Nosotros />
      </div>
      <div id="socios" className="py-10 px-4">
        <Socios />
      </div>
      <div className="py-10 px-4" id="servicios">
        <Servicios />
      </div>
    </main>
  );
};
export default App;
