import React from 'react';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="element">
      <button className="button-delete" type="button" name="delete"></button>
      <img
        className="element__cover"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button className="button-like" type="button" name="like"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
