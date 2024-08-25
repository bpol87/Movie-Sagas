import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [movieTitle, setMovieTitle] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const [movieDesc, setMovieDesc] = useState("");
  const [genre, setGenre] = useState("");

  const addMovie = (event) => {
    event.preventDefault();

    let movieToAdd = {
      title: movieTitle,
      poster: movieUrl,
      description: movieDesc,
      genre_id: genre,
    };
    console.log("movieToAdd is:", movieToAdd);
    dispatch({ type: "ADD_MOVIE", payload: movieToAdd });
    history.push("/");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center border-slate-600 shadow-lg w-9/12">
        <div className="flex flex-col items-center py-6">
          <h2 className="text-2xl font-bold">Add a Movie!</h2>
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={() => addMovie(event)}
        >
          <div className="w-6/12">
            <label
              htmlFor="movie-title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Movie Title
            </label>
            <div className="mt-2 w-full">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  type="text"
                  name="movie-title"
                  id="movie-title"
                  autoComplete="movie-title"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 w-full text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="i.e. Titanic"
                />
              </div>
            </div>
          </div>
          <div className="pt-4 w-6/12">
            <label
              htmlFor="movie-image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Movie Image
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  value={movieUrl}
                  onChange={(e) => setMovieUrl(e.target.value)}
                  type="text"
                  name="movie-image"
                  id="movie-image"
                  autoComplete="movie-image"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Movie Poster URL"
                />
              </div>
            </div>
          </div>
          <div className="pt-4 w-6/12">
            <label
              htmlFor="movie-desc"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Movie Description
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <textarea
                  value={movieDesc}
                  onChange={(e) => setMovieDesc(e.target.value)}
                  type="text"
                  name="movie-desc"
                  id="movie-desc"
                  autoComplete="movie-desc"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder='"This movie is about..."'
                />
              </div>
            </div>
          </div>
          <div className="pt-4 w-6/12">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Pick a Genre:
            </label>
            <div className="mt-2">
              <select
                onChange={(e) => setGenre(e.target.value)}
                className="flex w-6/6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
              >
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
              </select>
            </div>
          </div>
          <button className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 px-6 py-2 my-6 bg-slate-800 text-white hover:bg-slate-100 hover:text-slate-950">
            Submit Movie
          </button>
        </form>
      </div>
    </div>
  );
}

export default MovieForm;
