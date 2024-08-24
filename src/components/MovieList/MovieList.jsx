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
      <h1 className="text-center text-3xl">MovieList</h1>
      <section className="flex flex-wrap items-center justify-center">
        {movies.map((movie) => {
          return (
            <div
              data-testid="movieItem"
              key={movie.id}
              className="border-gray-700 border m-4 flex flex-col w-3/12 space-y-4 justify-center items-center pb-4"
            >
              <h3 className="text-center text-2xl font-bold p-2">
                {movie.title}
              </h3>
              <img
              className="hover:cursor-pointer max-w-96 min-w-96"
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
