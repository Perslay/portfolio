import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
      <div>Logo</div>
      <button>Menu</button>
    </div>
  );
};
