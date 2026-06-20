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
        <h2 className={css.secondHeading}>Games Tester</h2>
        <p className={css.paragraph}>
          I have experience in testing games, reporting bugs and providing
          feedback to developers. My attention to detail and ability to
          recognize patterns make me a valuable asset to any quality assurance
          team.
        </p>
      </section>
      <section className={css.section}>
        <h3 className={css.thirdHeading}>Curriculum Vitae</h3>
        <div className={css.cvDiv}>
          <p className={css.paragraph}>
            If you want to know more about my professional experience, skills
            and education, you can view my CV by clicking on this link:
          </p>
          <a
            className={css.cvLink}
            // href="/natalia_fedyk_cv.pdf"
            href={`${import.meta.env.BASE_URL}natalia_fedyk_cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={css.cvLinkText}>View CV</span>
            <svg className={css.arrowIcon} width="45" height="45">
              <use href="/images/icons.svg#icon-arrow" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
