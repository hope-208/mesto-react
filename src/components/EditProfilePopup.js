import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      container="container"
      isOpen={isOpen}
      onClose={onClose}
      button={isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        <input
          className="form__input form__input_type-name"
          type="text"
          name="name"
          id="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChangeName}
          required
        />
        <span className="error login-error"></span>
      </label>
      <label className="form__label">
        <input
          className="form__input form__input_type-job"
          type="text"
          name="login"
          id="login"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChangeDescription}
          required
        />
        <span className="error job-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
