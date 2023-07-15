
import img from "./images/f1.png"
import './App.css';
import "./normalize.css"
import Cards from "./components/Cards/Cards";

function App() {
  const cards = [
    { title: "test", description: "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd", img: img },
    { title: "test", description: "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd", img: img },
    { title: "test", description: "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd", img: img },
    { title: "test", description: "assssssssssssssssd asdas dasedqwdsa dkljasklj asd jklasjdqw klsjadkljaskl jaskldjaslkdas asdasd", img: img }
  ]
  return (

    <Cards cards={cards}></Cards>
  );
}

export default App;
