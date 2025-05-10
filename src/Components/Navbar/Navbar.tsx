import { BiNotification, BiSearch } from "react-icons/bi";
import "./Navabar.css";
import mamun from "../../assets/mamun.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>TMBD MOVIES</h1>
        <ul className="navbar-menu">
          <li>Movies</li>
          <li>Tv Shows</li>
          <li>People</li>
          <li>More </li>
        </ul>
      </div>
      <div className="navbar-right">
        <i>
          <BiNotification />{" "}
        </i>
        <img className="mamun-images" src={mamun} alt="" />
        <i>
          <BiSearch />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
