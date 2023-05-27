import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      container="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      button="Сохранить"
    >
      <label className="form__label">
        <input
          className="form__input form__input_edit-avatar"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="error avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
