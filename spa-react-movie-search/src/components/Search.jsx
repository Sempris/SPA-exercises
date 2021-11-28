import React from "react";

function Search({ handleChange, searchMovies, ifUserTyping }) {
  const change = (e) => {
    handleChange(e.target.value);
    ifUserTyping(true);
  };

  const submit = (e) => {
    e.preventDefault();
    searchMovies();
    ifUserTyping(false);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" onChange={change} />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
}

export default Search;
