import React from "react";
import "./Footer.css";
interface temp {
  temhead: string;
  titleone: string;
  titletwo: string;
  titlethree: string;
  titlefour?: string;
  titlefive?: string;
}

const TempFooter: React.FC<temp> = (temp) => {
  const { temhead, titleone, titletwo, titlethree, titlefour, titlefive } =
    temp;
  return (
    <div className="footer-tem-container">
      <h3 className="footer-temhead">{temhead}</h3>
      <ul className="footer-tem-nav">
        <li>{titleone}</li>
        <li>{titletwo}</li>
        <li>{titlethree}</li>
        {titlefour && <li>{titlefour}</li>}
        {titlefive && <li>{titlefive}</li>}
      </ul>
    </div>
  );
};

export default TempFooter;
