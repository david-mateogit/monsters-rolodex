import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import './CardList.css';

const CardList = ({ monsters }) => {
    return (
        <div className="CardList">
            {monsters.map(monster => {
                return <Card key={monster.id} monster={monster} />;
            })}
        </div>
    );
};

CardList.propTypes = {
    monsters: PropTypes.array.isRequired,
};

export default CardList;
