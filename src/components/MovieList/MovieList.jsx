import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const getMovieDetails = (movieId) => {
    dispatch({ type: "GET_DETAILS", payload: movieId });
    history.push("/details");
  };

  return (
    <main className="pt-4 flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold py-4 px-8 border border-dashed border-l-slate-900 border-r-slate-900 border-t-4 border-b-4 border-white bg-slate-900 text-white inset-44">Movie List</h1>
      <section className="flex flex-wrap items-center justify-center">
        {movies.map((movie) => {
          return (
            <div
              data-testid="movieItem"
              key={movie.id}
              className="border-gray-700 border m-4 flex flex-col space-y-4 justify-center items-center w-96 h-96 place-items-center bg-slate-200 shadow-lg"
            >
              <h3 className="text-center text-2xl font-bold text-indigo-900">
                {movie.title}
              </h3>
              <img
              className="hover:cursor-pointer w-6/12"
                data-testid="toDetails"
                src={movie.poster}
                alt={movie.title}
                onClick={() => getMovieDetails(movie.id)}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
