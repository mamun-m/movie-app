import React, { useState } from "react";
import "./Latestrailer.css";
import PlayingRIght from "../../Custom/PlayingRIght";
import play from "../../assets/bigPlay.png";
import ShareVideoid from "./ShareVideoid";
import { useDataContext } from "../../context/DataContext";

const Latestrailer: React.FC = () => {
  const { upcoming } = useDataContext();
  const [showVideo, setshowVideo] = useState<string | null>(null);

  return (
    <div className="latestrailer">
      <div className="latestrailer-left">
        <h1>Upcoming Movies latest trailers</h1>
        <div className="latest-trailer-section">
          <h3>Popular</h3>
          <h3>In Theaters </h3>
        </div>
      </div>
      <div className="latestrailer-right">
        <PlayingRIght>
          {upcoming.map((item, index) => (
            <div className="upcoming-container" key={index}>
              <img
                className="upcomint-container-images"
                src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                alt=""
              />
              <div className="upcoming-names-details">
                <h3>{item.title}</h3>
                <h3>{item.release_date}</h3>
              </div>
              <div className="play-icons" onClick={() => setshowVideo(item.id)}>
                <img src={play} />
              </div>
              {showVideo === item.id && (
                <ShareVideoid
                  onClose={() => setshowVideo(null)}
                  shareid={item.id}
                />
              )}
            </div>
          ))}
        </PlayingRIght>
      </div>
    </div>
  );
};

export default Latestrailer;
