import Accordian from "./Accordian";
import Camp from "./Camp";
import Feature from "./Feature";
import GetApp from "./GetApp";
import Greet from "./Greet.jsx";
import Guide from "./Guide";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Greet />
      <Camp />
      <Guide />
      <Feature />
      <Accordian />
      <GetApp />
    </div>
  );
};

export default Home;
