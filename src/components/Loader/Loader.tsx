import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loadingScreen}>
      <p className={css.loading}>Loading...</p>
    </div>
  );
};
