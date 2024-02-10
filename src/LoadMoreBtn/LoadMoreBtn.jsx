import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      Load more
    </button>
  );
};
