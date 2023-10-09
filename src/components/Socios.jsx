import panasaLogo from "../assets/PANASA-LOGO.png";
import skLogo from "../assets/SK-LOGO.png";

const Socios = () => {
  return (
    <section>
      <h2 className="text-center text-2xl mb-4">Nuestros Socios</h2>
      <div className="flex max-sm:flex-col justify-center gap-10 items-center py-4">
        <img
          src={panasaLogo}
          alt="panasa logo"
          className="md:h-[200px] md:w-[250px] h-[100px] w-[100px]"
        />
        <img
          src={skLogo}
          alt="sk logo"
          className="md:h-[200px] md:2-[250px] h-[100px] w-[100px]"
        />
      </div>
    </section>
  );
};
export default Socios;
