import React, { useRef, useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const hide = useRef();

  const ifUserTyping = (boolean) => setIsTyping(boolean);

  const handleChange = (inputValue) => {
    setSearchValue(inputValue);
  };

  const searchMovies = async () => {
    const data = await (
      await fetch(`https://www.omdbapi.com/?apikey=756abb2f&s=${searchValue}`)
    ).json();
    setMoviesList(data.Search);
	hide.current.style.display = 'none';
  };

  return (
    <div className="App">
      <h1>Search for Your Favorite Movie</h1>

      <Search
        handleChange={handleChange}
        searchMovies={searchMovies}
        ifUserTyping={ifUserTyping}
      />

      {moviesList
        ? moviesList.map(({ imdbID }) => <Result key={imdbID} id={imdbID} />)
        : !isTyping && (
            <h2>There is no movie found with the name {searchValue}</h2>
          )}
      <div ref={hide} className="image">
        <img src="./movies.jpg" alt="Wallpaper" />
      </div>
    </div>
  );
}

export default App;
