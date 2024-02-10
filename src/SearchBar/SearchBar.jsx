import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.query.value.trim() === "") {
      toast.error(`Enter query please`);
      return;
    }

    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search"
        />
        <button className={css.button} type="submit">
          <IoIosSearch />
        </button>
      </form>
    </header>
  );
};
