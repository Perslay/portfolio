import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={css.footer}>
      <h3>Contact</h3>
      <address>
        <p>phone</p>
        <p>mail</p>
        <div>github</div>
        <div>linkedin</div>
      </address>
    </div>
  );
};
