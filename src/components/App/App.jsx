import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <h1 className='text-center text-4xl p-6 bg-black text-white'>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
