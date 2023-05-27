import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      container="container"
      isOpen={isOpen}
      onClose={onClose}
      button="Сохранить"
    >
      <label className="form__label">
        <input
          className="form__input form__input_type-name"
          type="text"
          name="login"
          id="login"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="error login-error"></span>
      </label>
      <label className="form__label">
        <input
          className="form__input form__input_type-job"
          type="text"
          name="job"
          id="job"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="error job-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
