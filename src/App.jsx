import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ArtistDetailsPage from "./pages/ArtistDetailsPage/ArtistDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
function App() {
  return (
    <Switch>
      <Route path="/results">
        <SearchResultsPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/:artistId">
        <ArtistDetailsPage />
      </Route>
    </Switch>
  );
}

export default App;
