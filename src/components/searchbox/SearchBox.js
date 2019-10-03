import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

const SearchBox = ({ searchField, handleChange }) => {
    return (
        <div>
            <form>
                <input
                    className="SearchBox"
                    type="search"
                    name="text"
                    value={searchField}
                    onChange={handleChange}
                    placeholder="Search monsters"
                    autoComplete="off"
                />
            </form>
        </div>
    );
};

SearchBox.propTypes = {
    searchField: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
