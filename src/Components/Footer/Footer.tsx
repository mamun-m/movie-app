import React from "react";
import "./Footer.css";
import { footer_assests } from "../../assets/assets";
import TempFooter from "./TempFooter";
const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      {footer_assests.map((item, index) => (
        <div key={index}>
          <TempFooter
            temhead={item.head}
            titleone={item.titleone}
            titletwo={item.titletwo}
            titlethree={item.titlethree}
            titlefour={item.titlefour}
            titlefive={item.titlefive}
          />
        </div>
      ))}
    </div>
  );
};

export default Footer;
