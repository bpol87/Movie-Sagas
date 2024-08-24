import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeLatest('FETCH_MOVIES', fetchAllMovies);
  yield takeLatest('GET_DETAILS', getOneMovieDetails);
  yield takeLatest('ADD_MOVIE', addMovieToDb);
}

function* addMovieToDb(action) {
    try {
      const addedMovie = yield axios.post('/api/movies', action.payload)
    } catch {

    }
}

function* getOneMovieDetails(action) {
try {
  const oneMovieGenres = yield axios.get(`/api/genres/${action.payload}`);
  yield put({
    type: 'SET_GENRES',
    payload: oneMovieGenres.data
  })
  const oneMovieDetails = yield axios.get(`/api/details/${action.payload}`);
  yield put ({
    type: 'SET_DETAIL',
    payload: oneMovieDetails.data
  })
} catch {
  console.log('getOneMovieDetails error:', error);
}
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [''], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the specific movie details
const details = (state=[''], action) => {
  if( action.type === 'SET_DETAIL') {
      return action.payload;
  }
        return state;
}

// Used to store the movie genres
const genres = (state = [''], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
