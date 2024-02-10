import css from "./ErrorMessage.module.css";

// export const ErrorMessage = () => {
//   return (
//     <>
//       <h3 className={css.textError}>It`s end of search</h3>
//     </>
//   );
// };

export const MessageNotFound = () => {
  return (
    <>
      <h3 className={css.textError}>ERROR! Bad request! Reload page please</h3>
    </>
  );
};
