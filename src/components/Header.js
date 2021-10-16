import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => (
  <header className={classes["main-header"]}>
    <h1>Discover Movies/Tv Shows</h1>
    <nav className={classes["nav"]}>
      <ul>
        <li>
          <NavLink activeClassName={classes["active"]} to="/popular">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes["active"]} to="/newest">
            Newest
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes["active"]} to="/trending">
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes["active"]} to="/top-rated">
            Top Rated
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
