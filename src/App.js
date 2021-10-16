import Header from "./components/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Newest from "./components/movies/Newest";
import Popular from "./components/movies/Popular";
import TopRated from "./components/movies/TopRated";
import Trending from "./components/movies/Trending";
import classes from "./App.css";
import { useState } from "react";

function App() {
  const [mediaType, setMediaType] = useState("movies");
  const [searchText, setSearchText] = useState("");
  const mediaTypeFilterHandler = (e) => {
    // console.log(e.target.value);
    setMediaType(e.target.value);
  };
  const searchMediaHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setSearchText("");
      return;
    }
    console.log(e.target.value);
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className={classes["dataPanel"]}>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/popular" />
            </Route>
            <Route path="/popular" exact>
              <Popular media={mediaType} searchMedia={searchText} />
            </Route>
            <Route path="/newest" exact>
              <Newest media={mediaType} searchMedia={searchText} />
            </Route>
            <Route path="/trending" exact>
              <Trending media={mediaType} searchMedia={searchText} />
            </Route>
            <Route path="/top-rated" exact>
              <TopRated media={mediaType} searchMedia={searchText} />
            </Route>
          </Switch>
        </main>
      </div>
      <aside className={["filterPanel"]}>
        <h2>Discover options</h2>
        <form>
          <input
            type="text"
            placeholder="serach movie/tv show"
            value={searchText}
            onChange={searchMediaHandler}
          />
          <label>Type</label>
          <select value={mediaType} onChange={mediaTypeFilterHandler}>
            <option value="movies">Movies</option>
            <option value="tv-shows">Tv Shows</option>
          </select>
          <label>Genre</label>
          <select>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
        </form>
      </aside>
    </>
  );
}

export default App;
