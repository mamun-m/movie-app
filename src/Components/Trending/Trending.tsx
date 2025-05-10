import { useDataContext } from "../../context/DataContext";
import MovieCustom from "../../Custom/MovieCustom";
import PlayingRIght from "../../Custom/PlayingRIght";

import "./Trending.css";

const Trending = () => {
  const { movies, timeWindow, settimeWindow } = useDataContext();
  return (
    <div className="trending">
      <div className="trending-left">
        <h2>Now Playing</h2>
        <div className="trending-section">
          <button
            className={timeWindow === "day" ? "active" : ""}
            onClick={() => settimeWindow("day")}
          >
            today
          </button>
          <button
            className={timeWindow === "week" ? "active" : ""}
            onClick={() => settimeWindow("week")}
          >
            week{" "}
          </button>
        </div>
      </div>
      <PlayingRIght>
        {movies.map((item, index) => (
          <MovieCustom
            id={item.id}
            key={String(index)}
            img={item.poster_path}
            name={item.title}
            date={item.release_date}
          />
        ))}
      </PlayingRIght>
    </div>
  );
};

export default Trending;
