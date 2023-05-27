import React from 'react';

function PopupWithForm({
  name,
  title,
  container,
  isOpen,
  onClose,
  button,
  children,
}) {
  return (
    <section className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__${container}`}>
        <button
          className={`button-close button-close_${name}`}
          type="button"
          form={`${name}`}
          onClick={onClose}
        ></button>

        <form
          className={`form form_${name}`}
          name={`${name}`}
          id={`${name}`}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            className={`button-submit button-submit_${name} button-submit_disabled`}
            type="submit"
            form={`${name}`}
            disabled
          >
            {button}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
