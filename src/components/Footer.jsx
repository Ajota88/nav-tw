const Footer = () => {
  let Links = [
    { name: "NOSOTROS", link: "#nosotros" },
    { name: "SERVICIOS", link: "#servicios" },
    { name: "SOCIOS", link: "#socios" },
    { name: "CONTÁCTANOS", link: "/" },
  ];

  return (
    <footer className="px-4 py-10 bg-slate-600 flex justify-between items-center">
      <div>
        <h2 className="text-xl">Logo</h2>
      </div>
      <ul>
        {Links.map((link) => (
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <a
              href={link.link}
              className="text-gray-800 hover:text-blue-400 duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
