import Navbar from "./components/Navbar";
import Carousel from "./components/Carrusel";

const App = () => {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <Carousel />
      </div>
      <div id="nosotros" className="py-10">
        <h2>Nosotros</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          temporibus non dolor cum deleniti ab inventore facilis ullam
          voluptatibus, accusantium, tempore corrupti libero unde exercitationem
          repellendus perferendis cumque nulla. Nobis vitae quaerat numquam,
          consectetur aliquam, ducimus perferendis ea ad distinctio
          reprehenderit officia temporibus. Temporibus, voluptatem accusantium
          enim numquam doloribus assumenda aliquam corporis autem dolore
          consequuntur deserunt sunt dolor quia vitae blanditiis tempora quo
          perferendis officia nihil eaque provident quaerat! Beatae quo est
          maxime necessitatibus at officiis ducimus quas vel nam impedit,
          aperiam voluptatem magnam quasi. Perferendis laboriosam quos deserunt
          a, nemo adipisci quasi non libero ratione tempora obcaecati deleniti
          maiores?
        </p>
      </div>
      <div id="socios" py-8>
        <h2>Socios</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi rem
          autem totam, doloremque velit vel minima recusandae. Fugiat cumque
          animi quibusdam minus sapiente optio tenetur eius amet corporis, sunt
          tempore doloremque ab possimus, vero vel delectus voluptatem
          voluptatum quisquam. Laborum cupiditate porro, laboriosam obcaecati
          ducimus tenetur maxime tempore aperiam mollitia deleniti velit nemo
          veritatis praesentium, architecto repellat dignissimos quod
          voluptatibus? Aperiam commodi dolores porro id ex blanditiis dolorum
          sapiente, officiis aut omnis obcaecati consectetur molestiae accusamus
          quasi nam modi quos provident, minus amet magni iste quod cumque
          tempora nobis. Fugiat exercitationem ipsam harum, tempora voluptatum
          modi similique eaque. Commodi, ea?
        </p>
      </div>
    </main>
  );
};
export default App;
