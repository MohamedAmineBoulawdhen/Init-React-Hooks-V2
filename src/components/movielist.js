import React from "react";
import MovieCard from "./moviecard";

const MovieList = ({ filteredMovies }) => {
  return (
    <div>
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
