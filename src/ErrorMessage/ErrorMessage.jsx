import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <>
      <h3 className={css.textError}>Oh, reload the page!</h3>
    </>
  );
};

export const MessageNotFound = () => {
  return (
    <>
      <h3 className={css.textError}>
        Oops, unfortunately there is nothing for your request! Try a different
        name!
      </h3>
    </>
  );
};
