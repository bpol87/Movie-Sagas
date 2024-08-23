import { Route, HashRouter as Router } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <h1 className="text-center text-4xl p-6 bg-black text-white">
          The Movies Saga!
        </h1>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
