import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Welcome. </h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
      <div className="hero-right">
        <input
          type="text"
          placeholder="search for a movie, tv show,person..."
        />
        <button>search </button>
      </div>
    </div>
  );
};

export default Hero;
