import { RotatingLines } from "react-loader-spinner";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchPhotos } from "./api";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { MessageNotFound } from "../src/ErrorMessage/ErrorMessage";

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

        //if (fetchedPhoto.length === 0) {
        //   <MessageNotFound />;
        //return console.log("ERROR");
        //} else {}
        setCards((prevCards) => [...prevCards, ...fetchedPhoto]);
        //      setCards(response.data.results);

        setVisualBtn(fetchedPhoto.total_pages != page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false); //"ховає" лоадінг при будь-якому результаті запиту
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={ImageSearch} />

      {loading && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}

      {error && Notify.failure(`ERROR! Bad request! Reload page please`)}

      {cards.length > 0 && <ImageGallery items={cards} />}

      {visualBtn && !loading && <LoadMoreBtn clickBtn={handleLoadMore} />}

      <Toaster position="top-right" />
    </>
  );
};
