import React from 'react';

const SearchBar = ({handleSubmit}) => {
  return (
    <form 
      className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2"
      onSubmit={handleSubmit}>
      <input 
        className="form-control form-control-sm mr-3 w-75"
        type="text"
        placeholder="City"
        aria-label="City"/>
    </form>
  );
}

export default SearchBar;