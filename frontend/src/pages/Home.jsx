import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import card1 from "../images/1.png";
import card2 from "../images/2.png";
import card3 from "../images/3.png";
import card4 from "../images/4.png";
import card5 from "../images/5.png";
import card6 from "../images/6.png";
import card7 from "../images/7.jpeg";
import card8 from "../images/8.jpeg";
import card9 from "../images/9.jpeg";

function Home() {
  const cards = [
    {id:1,
      img: card7,
      category:"1"
    },
    {id:2,
      img: card2,
      category:"2"
    },
    {id:3,
      img: card3,
      category:"3"
    },
    {id:4,
      img: card4,
      category:"1"
    },
    {id:5,
      img: card6,
      category:"3"
    },
    {id:6,
      img: card9,
      category:"2"
    },
    {id:7,
      img: card1,
      category:"2"
    },
    {id:8,
      img: card8,
      category:"1"
    },
    {id:9,
      img: card5,
      category:"3"
    },
  ];
  return (
    <>
      <Hero />
      <Cards cards={cards}></Cards>
      <About></About>
      <Contact></Contact>
    </>
  );
}
export default Home;
