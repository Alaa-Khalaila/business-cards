import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import card1 from "../images/1.png";
import card2 from "../images/2.png";
import card3 from "../images/3.png";
import card4 from "../images/4.png";
import card5 from "../images/5.png";
import card6 from "../images/6.png";

function Home() {
  const cards = [
    {
      img: card1,
    },
    {
      img: card2,
    },
    {
      img: card3,
    },
    {
      img: card4,
    },
    {
      img: card5,
    },
    {
      img: card6,
    },
  ];
  return (
    <>
      <Hero />
      <Cards cards={cards}></Cards>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
export default Home;
