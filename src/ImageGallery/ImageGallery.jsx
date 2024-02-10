import { ImageCard } from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((card) => (
        <li key={card.id} className={css.item}>
          <ImageCard
            url={card.urls.small}
            regular={card.urls.regular}
            alt={card.alt_description}
            likes={card.likes}
            name={card.user.name}
          />
        </li>
      ))}
    </ul>
  );
};
