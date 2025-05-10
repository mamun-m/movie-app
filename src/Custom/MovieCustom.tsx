import { Link } from "react-router-dom";
import "./Custom.css";

interface MovieCustomProps {
  id: string;
  key: string;
  img: string;
  name: string;
  date: string;
}

const MovieCustom = ({ id, img, name, date }: MovieCustomProps) => {
  return (
    <div className="trending-overflow">
      <div className="trending-container">
        <Link to={`/MovieDetails/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={name} />
        </Link>
        <div className="trending-desc">
          <h3>{name}</h3>
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCustom;
