import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Latestrailer.css";

interface share {
  shareid: string;
  onClose: () => void;
}

type Video = {
  key: string;
  site: string;
  type: string;
};

const ShareVideoid: React.FC<share> = ({ shareid, onClose }) => {
  const [videoKey, setvideoKey] = useState<string | null>(null);
  useEffect(() => {
    const fetchvideo = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${shareid}/videos`,
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTg3NmNiOGQxNGY3YTQ2Mjg2MjMxM2E5N2NjYTcxZCIsIm5iZiI6MTc0NTQ1MTY4OC4yMiwic3ViIjoiNjgwOTdhYTg4YmNlYTY2YTg2YWE3OGI0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uKSS_w9wrD8ZeqCSaJnoziLL0zW82w0cNRy9ZDS5g0Y"
          }
        };
        const res = await axios.request(options);
        const trailer = res.data.results.find(
          (vid: Video) => vid.site === "YouTube" && vid.type === "Trailer"
        );
        if (trailer) {
          setvideoKey(trailer.key);
        } else {
          console.log(`didn't get trailer `);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideo();
  }, [shareid]);
  if (!videoKey) return <p>trailer is loading ... </p>;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {videoKey ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <p>loading .... </p>
        )}
      </div>
    </div>
  );
};

export default ShareVideoid;
