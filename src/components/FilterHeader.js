import classes from "./FilterHeader.module.css";
const FilterHeader = () => {
  return (
    <header className={classes["main-head"]}>
      <h1>Filter Discover</h1>
      <nav className={classes["nav-fil"]}>
        <ul>
          <li>
            <label className={classes["movieTvFilter"]}>Filter By Type: </label>
            <select>
              <option value="movies">Movies</option>
              <option value="tv-shows">Tv Shows</option>
            </select>
          </li>
          <li>
            <input
              type="text"
              placeholder="search"
              className={classes["searchBar"]}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default FilterHeader;
