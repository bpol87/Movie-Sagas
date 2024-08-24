import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details.jsx";
import Header from "../Header/Header.jsx";
import MovieForm from "../MovieForm/MovieForm.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/movie-form">
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
