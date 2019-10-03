import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ monster }) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2`} alt={monster.name} />
            <h2>{monster.name}</h2>
            <h4>{monster.email}</h4>
        </div>
    );
};

Card.propTypes = {
    monster: PropTypes.object.isRequired,
};

export default Card;
