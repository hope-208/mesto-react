import React from 'react';

function ImagePopup({ isOpen, onClose, card }) {
  React.useEffect(() => {
    if (!`${card && 'popup_opened'}`) return;

    function handleESC(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    function handleOverlayClose(evt) {
      evt.target.classList.contains('popup_opened') && onClose();
    }

    document.addEventListener('keydown', handleESC);
    document.addEventListener('mousedown', handleOverlayClose);

    return () => {
      document.removeEventListener('keydown', handleOverlayClose);
      document.removeEventListener('mousedown', handleESC);
    };
  }, [`${card && 'popup_opened'}`]);

  return (
    <section
      className={`popup popup_zoom ${card && 'popup_opened'}`}
      aria-label="Всплывающее окно увеличения фото карточки(места)"
    >
      <div className="popup__zoom-container">
        <button
          className="button-close button-close_zoom"
          type="button"
          onClick={onClose}
        ></button>
        <figure className="popup__zoom-photo">
          <img
            className="popup__photo"
            src={card ? card.link : ''}
            alt={card ? card.name : ''}
          />
          <figcaption className="popup__zoom-title">
            <p className="popup__photo-title">{card ? card.name : ''}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
