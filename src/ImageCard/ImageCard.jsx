import css from "../ImageCard/ImageCard.module.css";
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageCard = ({ url, alt, regular, name, likes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  // Функція для відкриття модального вікна
  const openModal = ({ imageUrl }) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  // Функція для закриття модального вікна
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.wrapperImg}>
      <img
        className={css.img}
        src={url}
        alt={alt}
        width={250}
        onClick={openModal}
      />
      <p>Likes: {likes}</p>
      <p>Author of photo: {name}</p>
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={regular}
      />
    </div>
  );
};
