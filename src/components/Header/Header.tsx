import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

export const Header = ({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) => {
  const width = useWindowSize();
  const isMobile = width < 768;

  return (
    <header className={css.headerBackground}>
      <div className={css.header}>
        {isMobile ? (
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
        ) : (
          <nav>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <Link to="/" className={css.navLink}>
                  Home
                </Link>
              </li>
              <li className={css.navItem}>
                <Link to="/about" className={css.navLink}>
                  About
                </Link>
              </li>
              <li className={css.navItem}>
                <Link to="/projects" className={css.navLink}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
