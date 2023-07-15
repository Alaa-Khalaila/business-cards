import img from "./images/f1.png";
import Hero from "./components/Hero/Hero";
import "./normalize.css";
import Cards from "./components/Cards/Cards";
import { Footer } from "./components/footer/Footer";

function App() {
  const cards = [
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: img,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: img,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: img,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: img,
    },
  ];
  return (
    <>
      <Hero />
      <Cards cards={cards}></Cards>
      <Footer/>
    </>
  );
}

export default App;
