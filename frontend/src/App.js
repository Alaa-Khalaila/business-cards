import img from "./images/f1.png";
import card1 from "./images/1.png";
import card2 from "./images/2.png";
import card3 from "./images/3.png";
import card4 from "./images/4.png";
import card5 from "./images/5.png";
import card6 from "./images/6.png";
import Hero from "./components/Hero/Hero";
import "./normalize.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/footer/Footer";

function App() {
  const cards = [
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: card1,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: card2,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: card3,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: card4,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: card5,
    },
    {
      title: "test",
      description:
        "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd",
      img: card6,
    },
  ];
  return (
    <>
      <Hero />
      <Cards cards={cards}></Cards>
      <Footer></Footer>
    </>
  );
}

export default App;
