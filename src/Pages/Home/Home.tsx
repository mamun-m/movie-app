import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Latestrailer from "../../Components/playingVideo/Latestrailer";
import PopularMan from "../../Components/Popular/PopularMan";
import Trending from "../../Components/Trending/Trending";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="home-selection">
        <Trending />
      </div>
      <Latestrailer />
      <div className="home-selection">
        <PopularMan />
      </div>
      <Footer />
    </>
  );
};

export default Home;
