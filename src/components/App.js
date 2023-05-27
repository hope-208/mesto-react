import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPhotoPopup from './AddPhotoPopup.js';
import ImagePopup from './ImagePopup.js';

import '../index.css';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  React.useEffect(() => {
    function handleEscClose(evt) {
      evt.key === 'Escape' && closeAllPopups();
    }

    function handleOverlayClose(evt) {
      evt.target.classList.contains('popup_opened') && closeAllPopups();
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('mousedown', handleOverlayClose);

    return () => {
      document.removeEventListener('click', handleOverlayClose);
      document.removeEventListener('mousedown', handleEscClose);
    };
  }, []);

  return (
    <>
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPhotoPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        container="delete-container"
        isOpen={false}
        onClose={closeAllPopups}
        button="Да"
      ></PopupWithForm>
    </>
  );
}

export default App;
