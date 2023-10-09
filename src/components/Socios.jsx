import panasaLogo from "../assets/PANASA-LOGO.png";
import skLogo from "../assets/SK-LOGO.png";

const Socios = () => {
  return (
    <section className="px-6 py-10" id="socios">
      <h2 className="text-center text-2xl mb-4">Nuestros Socios</h2>
      <div className="flex max-sm:flex-col justify-center gap-10 items-center py-4">
        <img
          src={panasaLogo}
          alt="panasa logo"
          className="md:h-[200px] md:w-auto h-[100px] w-[100px]"
        />
        <img
          src={skLogo}
          alt="sk logo"
          className="md:h-[200px] md:w-auto h-[100px] w-[100px]"
        />
      </div>
    </section>
  );
};
export default Socios;
