import React from "react";
import { useDataContext } from "../../context/DataContext";
import PlayingRIght from "../../Custom/PlayingRIght";
import "./ManPopular.css";
const PopularMan: React.FC = () => {
  const { popularPerson } = useDataContext();
  return (
    <div className="popolar-container">
      <h1>What's Popular </h1>
      <PlayingRIght>
        {popularPerson.map((item, index) => (
          <div key={index} className="popular-content-details">
            <img
              src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
              alt={item.name}
            />
            <div className="popular-content-heading">
              <h3>{item.name}</h3>
              <h3>popularity : {item.popularity}</h3>
            </div>
          </div>
        ))}
      </PlayingRIght>
    </div>
  );
};

export default PopularMan;
