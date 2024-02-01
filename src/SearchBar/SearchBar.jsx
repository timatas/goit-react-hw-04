import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div>
      <header>
        <form className={css.form}>
          <button type="submit">
            <IoIosSearch />
          </button>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
        </form>
      </header>
    </div>
  );
};
