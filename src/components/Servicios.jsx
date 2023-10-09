import ServiciosCard from "./ServiciosCard";

const Servicios = () => {
  return (
    <section className="px-6 py-10" id="servicios">
      <h2 className="text-center text-2xl mb-8">Nuestros Servicios</h2>
      <div className="flex max-sm:flex-col justify-center gap-10 items-center">
        <ServiciosCard />
        <ServiciosCard />
        <ServiciosCard />
      </div>
    </section>
  );
};
export default Servicios;
