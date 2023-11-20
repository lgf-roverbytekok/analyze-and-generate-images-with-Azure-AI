import React from "react";
import PropTypes from "prop-types";

function SearchInput({ value, onChange }) {
  return (
    <>
        <label>Insert URL or type prompt:</label>
        <br/>
        <input 
            className="w-100" 
            type="text" 
            placeholder="Enter URL to analyze or textual prompt to generate an image"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </>
  );
}

// Props validation
SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchInput;



