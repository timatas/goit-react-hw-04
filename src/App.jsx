import Notiflix from "notiflix";
import toast, { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchPhotos } from "./api";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { MessageNotFound } from "../src/ErrorMessage/ErrorMessage";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visualBtn, setVisualBtn] = useState(false);

  const ImageSearch = async (newQuery) => {
    setQuery(`${nanoid()}/${newQuery}`);
    setPage(1);
    setCards([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true); //лоадінг, поки виконується запит
        setError(false);
        // setCards([]); //щоб не бачити результат попереднього запиту
        const fetchedPhoto = await fetchPhotos(query.split("/")[1], page);

        if (fetchedPhoto.total_pages === page) {
          setVisualBtn(false);
          Notiflix.Notify.info("It`s end of search");
        } else {
          setVisualBtn(true);
        }

        if (fetchedPhoto.results.length === 0) {
          toast.error(`There is nothing for your request! Try again`);
          return;
        }

        setCards((prevCards) => [...prevCards, ...fetchedPhoto.results]);
        //      setCards(response.data.results);
      } catch (error) {
        setError(true);
        setVisualBtn(false);
      } finally {
        setLoading(false); //"ховає" лоадінг при будь-якому результаті запиту
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={ImageSearch} />

      {loading && <Loader />}

      {error && <MessageNotFound />}

      {cards.length > 0 && <ImageGallery items={cards} />}

      {visualBtn && !loading && <LoadMoreBtn onClick={handleLoadMore} />}

      <Toaster position="top-center" />
    </>
  );
};
