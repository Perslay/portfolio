import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

{
  /* <Link to="/experience">Experience</Link>; */
}
export const NotFound = () => {
  return (
    <div className={css.notFound}>
      <p className={css.errorNumber}>404</p>
      <p className={css.errorName}>Page not found</p>
      <Link className={css.homeLink} to="/">
        Go back to home page
      </Link>
    </div>
  );
};
