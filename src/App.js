import Header from "./components/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Newest from "./components/movies/Newest";
import Popular from "./components/movies/Popular";
import TopRated from "./components/movies/TopRated";
import Trending from "./components/movies/Trending";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/popular" />
          </Route>
          <Route path="/popular" exact>
            <Popular />
          </Route>
          <Route path="/newest" exact>
            <Newest />
          </Route>
          <Route path="/trending" exact>
            <Trending />
          </Route>
          <Route path="/top-rated" exact>
            <TopRated />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
