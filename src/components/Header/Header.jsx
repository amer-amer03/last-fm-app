import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link to={"/"} className={classes.header__title}>
          hotboard
        </Link>
      </div>
      <div>
        <ul className={classes.header__nav}>
          <li className={classes.header__navItem}>charts</li>
          <li className={classes.header__navItem}>news</li>
          <li className={classes.header__navItem}>video</li>
          <li className={classes.header__navItem}>photos</li>
        </ul>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};
export default Header;
