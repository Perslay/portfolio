import css from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = ({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean;
  toggleNav: () => void;
}) => {
  const trapFocus = (dialogElement: HTMLElement) => {
    const focusableSelectors = [
      "a[href]",
      "button",
      '[tabindex]:not([tabindex="-1"])',
    ];
    const focusableElements = dialogElement.querySelectorAll(
      focusableSelectors.join(",")
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    dialogElement.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  };

  const dialog = document.getElementById("nav-div");
  const closeButton = document.getElementById("close-dialog");
  const openButton = document.getElementById("open-dialog");

  if (openButton) {
    openButton.addEventListener("click", () => {
      if (dialog && closeButton) {
        dialog.setAttribute("aria-hidden", "false");
        trapFocus(dialog);
        closeButton.focus();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      if (dialog && openButton) {
        dialog.setAttribute("aria-hidden", "true");
        openButton.focus();
      }
    });
  }

  return (
    <div
      role="dialog"
      aria-labelledby="navDialogTitle"
      aria-describedby="navDialogDesc"
      aria-hidden="true"
      className={`${css.navigation} ${isNavOpen ? css.navOpen : css.navClosed}`}
      id="nav-div"
    >
      <div className={css.dialogContent}>
        <button
          id="close-dialog"
          className={css.closeButton}
          aria-expanded={isNavOpen}
          aria-controls="nav-div"
          aria-label="Close navigation."
          onClick={toggleNav}
        >
          <svg className={css.closeIcon} width="30" height="30">
            <use href="/portfolio/images/icons.svg#icon-close" />
          </svg>
        </button>
        <h2 className={css.heading} id="navDialogTitle">
          Navigation
        </h2>
        <p id="navDialogDesc" className={css.description}>
          Choose the page you would like to visit.
        </p>
        <nav>
          <ul>
            <li className={css.navItem}>
              <Link to="/" className={css.navLink} onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link to="/about" className={css.navLink} onClick={toggleNav}>
                About
              </Link>
            </li>
            <li className={css.navItem}>
              <Link to="/projects" className={css.navLink} onClick={toggleNav}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
