import React from "react";
import { movies } from "../data";

function Movies() {
  
  return <div><h1>Movies Page</h1> {movies.map((movie,ind)=><div key={ind}>
    <h2>{movie.title}</h2>
    <p>{movie.time} min</p>
    <ul>
    {movie.genres.map((genr,index) => <li key={index}>{genr}</li>)}
    </ul>
  </div>)}</div>;
}

export default Movies;
