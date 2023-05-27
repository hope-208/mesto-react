import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getMyProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="container">
      <section className="profile">
        <div className="avatar" onClick={onEditAvatar}>
          <img className="avatar__image" src={userAvatar} alt="Аватар" />
          <div className="avatar__overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__content">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="button-edit"
              name="edit"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="button-add"
          name="add"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Записи в профиле">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
