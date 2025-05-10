import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
interface detailData {
  backdrop_path: string;
  budget: number;
  imdb_id: string;
  origin_country: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  homepage: string;
  production_companies: {
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
}
const MovieDetails = () => {
  const [detailData, setdetailData] = useState<detailData | null>(null);
  {
    console.log(detailData);
  }
  const {
    backdrop_path,
    budget,
    imdb_id,
    origin_country,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    title,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    vote_average,
    vote_count,
    homepage,
    production_companies,
    production_countries,
    spoken_languages
  } = detailData || {};
  const { id } = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3NmNiOGQxNGY3YTQ2Mjg2MjMxM2E5N2NjYTcxZCIsIm5iZiI6MTc0NTQ1MTY4OC4yMiwic3ViIjoiNjgwOTdhYTg4YmNlYTY2YTg2YWE3OGI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uKSS_w9wrD8ZeqCSaJnoziLL0zW82w0cNRy9ZDS5g0Y"
      }
    };
    axios
      .request(options)
      .then((res) => setdetailData(res.data))
      .catch((err) => console.error(err.message));
  }, [id]);

  if (!detailData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="movieDetails">
      <div className="movieDetails-left">
        <h2>{title}</h2>
        <div className="title-related-images">
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          )}
          {backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt={title}
            />
          )}
        </div>
      </div>
      <div className="movieDetails-right">
        <div className="details-movies-rights">
          <p>
            budget
            {budget}
          </p>
          <p>origin_country :{origin_country}</p>
          <p>original_language :{original_language}</p>
          <p>original_title :{original_title}</p>
          <p>popularity :{popularity}</p>
          <p>release_date :{release_date}</p>
          <p>revenue :{revenue}</p>
          <p>runtime :{runtime}</p>
          <p>status :{status}</p>
          <p>imdb_id:{imdb_id}</p>
          <p>tagline:{tagline}</p>
          <p>vote_average:{vote_average}</p>
          <p>vote_count:{vote_count}</p>
        </div>
        <div className="revenues-details">
          <h3>production_companies:</h3>

          {production_companies?.map((item, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.logo_path}`}
                alt={item.name}
              />
              <div className="products-company">
                <p>{item.name}</p>
                <p>{item.origin_country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="revenues-details">
          <h3> production_countries :</h3>

          {production_countries?.map((item, index) => (
            <div key={index}>
              <p>{item.iso_3166_1}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="revenues-details">
          <h3> spoken_languages : </h3>
          {spoken_languages?.map((item, index) => (
            <div key={index}>
              <p>{item.english_name}</p>
              <p>{item.iso_639_1}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="middles-moviesdetails">
        <p>overview:{overview}</p>
        <Link to={`${homepage}`}>visit officials site here </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
