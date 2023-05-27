import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPhotoPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add-photo"
      title="Новое место"
      container="container"
      isOpen={isOpen}
      onClose={onClose}
      button="Создать"
    >
      <label className="form__label">
        <input
          className="form__input form__input_photo-title"
          type="text"
          name="title"
          id="title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="error title-error"></span>
      </label>
      <label className="form__label">
        <input
          className="form__input form__input_photo-link"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="error link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPhotoPopup;
