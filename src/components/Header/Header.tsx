import css from "./Header.module.css";

export const Header = ({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) => {
  return (
    <div className={css.headerBackground}>
      <div className={css.header}>
        <button
          className={css.menuButton}
          aria-expanded={isNavOpen}
          aria-controls="nav-div"
          aria-label="Open navigation"
          onClick={toggleNav}
          id="open-dialog"
        >
          <svg className={css.menuIcon} width="40" height="40">
            <use href="/portfolio/images/icons.svg#icon-menu" />
          </svg>
        </button>
      </div>
    </div>
  );
};
