import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
    useEffect()
 const movieToUse = useSelector(store => store.details)
 const genresToUse = useSelector(store => store.genres)

console.log('movie to use is:', movieToUse[0].title)
console.log('genres to use is:', genresToUse)
  return (
    <div>
      <h2>{movieToUse[0].title}</h2>
      <img src={movieToUse[0].poster}></img>
    </div>
  );
}

export default Details;
