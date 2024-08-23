import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Details() {

  const movieToUse = useSelector((store) => store.details);
  const genresToUse = useSelector((store) => store.genres);
  console.log('movie to use is:', movieToUse)
  console.log('genres to use is:', genresToUse)

  return (
    <div className="flex flex-col items-center" data-testid="movieDetails">
        <button data-testid="toList" className="p-2 m-4 w-3/12 border"><Link to="/">Back to Movie List</Link></button>
    <div className="flex flex-row justify-center mt-4" >
      <img src={movieToUse ? movieToUse[0].poster : ''} className="w-12/12 h-1/2 aspect-auto"></img>
      <div className="w-5/12 pl-4">
        <h2 className="m-2 text-4xl font-bold">
          {movieToUse === undefined ? '' : movieToUse[0].title}
        </h2>
        <h5 className="mb-0 font-bold">Genres:</h5>
        <div className="flex flex-row m-2">
          {genresToUse
            ? genresToUse.map((genre) => {
                return <div className="bg-cyan-950 text-white pl-4 pr-4 pt-1 pb-1 shadow-slate-600 shadow-md rounded-full m-2">{genre.genre_name}</div>;
              })
            : ""}
        </div>
         <p>{movieToUse === undefined ? '' : movieToUse[0].description}</p>
      </div>
    </div>
    </div>
  );
}

export default Details;
