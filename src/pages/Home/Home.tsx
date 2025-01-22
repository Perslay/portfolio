import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.mainHome}>
      <h1 className={css.firstHeading}>Natalia Fedyk</h1>
      <img
        className={css.portrait}
        src="/portfolio/images/avatar.jpg"
        srcSet="/portfolio/images/avatar.jpg 1x, /portfolio/images/avatar@2x.jpg 2x"
        alt="Young woman with fair skin and long mousy hair."
      />
      {/* <h2 className={css.secondHeading}>Web Developer</h2> */}
      <p className={css.bio}>
        My name is Natalia Fedyk and I create websites. Becoming a web developer
        is my dream.
      </p>
    </div>
  );
};

export default Home;
