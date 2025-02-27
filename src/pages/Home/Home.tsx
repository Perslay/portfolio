import css from "./Home.module.css";

const Home = () => {
  return (
    <main className={css.home}>
      <h1 className={css.firstHeading}>Natalia Fedyk</h1>
      <section className={css.section}>
        <img
          className={css.portrait}
          src="/images/avatar.jpg"
          srcSet="/images/avatar.jpg 1x, /images/avatar@2x.jpg 2x"
          alt="Young woman with fair skin and long mousy hair."
        />
        <h2 className={css.secondHeading}>Web Development Aspirant</h2>
        <p className={css.paragraph}>
          My name is Natalia Fedyk and I create websites. Becoming a web
          developer is my dream.
        </p>
      </section>
      <section className={css.section}>
        <h3 className={css.thirdHeading}>Curriculum Vitae</h3>
        <p className={css.paragraph}>
          Are you an employer looking for a Frontend or Fullstack Developer? You
          can click one of the buttons below to see or download my CV.
        </p>
        <div className={css.cvLinks}>
          <a
            className={css.cvLink}
            // href="/natalia_fedyk_cv.pdf"
            href={`${import.meta.env.BASE_URL}natalia_fedyk_cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            See
          </a>
          <a
            className={css.cvLink}
            // href="/natalia_fedyk_cv.pdf"
            href={`${import.meta.env.BASE_URL}natalia_fedyk_cv.pdf`}
            download
          >
            Download
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
