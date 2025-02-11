import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
      <h1 className={css.firstHeading}>Natalia Fedyk</h1>
      <section className={css.section}>
        <img
          className={css.portrait}
          src="/portfolio/images/avatar.jpg"
          srcSet="/portfolio/images/avatar.jpg 1x, /portfolio/images/avatar@2x.jpg 2x"
          alt="Young woman with fair skin and long mousy hair."
        />
        <h2 className={css.secondHeading}>Web Development Aspirant</h2>
        <p>
          My name is Natalia Fedyk and I create websites. Becoming a web
          developer is my dream.
        </p>
      </section>
      <section className={css.section}>
        <h3 className={css.thirdHeading}>Curriculum Vitae</h3>
        <p>
          Are you an employer looking for a Frontend or Fullstack Developer? You
          can click the button below to see my CV.
        </p>
        <div className={css.cvLinks}>
          <a className={css.cvLink} href="./portfolio/natalia_fedyk_cv.pdf">
            See
          </a>
          <a
            className={css.cvLink}
            href="./portfolio/natalia_fedyk_cv.pdf"
            download
          >
            Download
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
