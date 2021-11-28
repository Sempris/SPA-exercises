import React, { useState, useEffect } from "react";

function Result({ id }) {
  const [movieData, setMovieData] = useState({});

  const getMovieData = async () => {
    const data = await (
      await fetch(`https://www.omdbapi.com/?apikey=756abb2f&i=${id}`)
    ).json();
    setMovieData(data);
  };

  useEffect(() => {
    getMovieData();
  });

  const { Title, Year, imdbRating, Plot, Poster } = movieData;
  return (
    <div className="card">
      <div className="picture">
        <img src={Poster} alt="poster" />
      </div>
      <div className="info">
        <p className="title">{Title}</p>
        <p className="year">{Year}</p>
        <p className="rating">Rating: {imdbRating}/10</p>
        <p className="plot">{Plot}</p>
      </div>
    </div>
  );
}

export default Result;
