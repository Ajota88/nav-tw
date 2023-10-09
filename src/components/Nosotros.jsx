import heroImg from "../assets/hero-img.jpg";

const Nosotros = () => {
  return (
    <section className="flex justify-between items-center px-4 py-8">
      <div className="flex-1">
        <h2 className="text-2xl ">Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          dignissimos odio cupiditate tenetur modi sed quae quod eligendi,
          adipisci fuga.
        </p>
      </div>
      <div className="block max-sm:hidden">
        <img src={heroImg} alt="hero image" width={600} height={300} />
      </div>
    </section>
  );
};
export default Nosotros;
