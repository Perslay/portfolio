import css from "./Projects.module.css";

const Projects = () => {
  return (
    <main className={css.projects}>
      <h1 className={css.firstHeading}>Projects</h1>
      <section className={css.section}>
        <h2 className={css.secondHeading}>Group Projects</h2>
        <p className={css.groupProjectsText}>
          These projects are unfinished but remain mentioned to prove my ability
          to work in a team.
        </p>
        <ul className={css.projectsList}>
          <li>
            <a
              className={css.projectLink}
              href="https://perslay.github.io/team-project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={css.thirdHeading}>Simply Chocolate</h3>
              <svg className={css.linkIcon} height="20" width="20">
                <use href="/images/icons.svg#icon-new-tab" />
              </svg>
              <span className={css.underline}></span>
            </a>
            <ul className={css.projectDetails}>
              <li className={css.projectTools}>HTML, CSS</li>
              <li>Role: Team Lead</li>
              <li>A website with a responsive layout.</li>
              <li>
                <div className={css.sourceContainer}>
                  <a
                    className={css.projectSource}
                    href="https://github.com/Perslay/team-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend source code
                    <svg className={css.linkIcon} height="15" width="15">
                      <use href="/images/icons.svg#icon-new-tab" />
                    </svg>
                    <span className={css.smallUnderline}></span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a
              className={css.projectLink}
              href="https://enchyb.github.io/Filmoteka-JS-team-project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={css.thirdHeading}>Filmoteka</h3>
              <svg className={css.linkIcon} height="20" width="20">
                <use href="/images/icons.svg#icon-new-tab" />
              </svg>
              <span className={css.underline}></span>
            </a>
            <ul className={css.projectDetails}>
              <li className={css.projectTools}>HTML, CSS, JavaScript</li>
              <li>Role: Developer</li>
              <li>Website app for choosing a movie.</li>
              <li>
                <div className={css.sourceContainer}>
                  <a
                    className={css.projectSource}
                    href="https://github.com/EnChyb/Filmoteka-JS-team-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend source code
                    <svg className={css.linkIcon} height="15" width="15">
                      <use href="/images/icons.svg#icon-new-tab" />
                    </svg>
                    <span className={css.smallUnderline}></span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a
              className={css.projectLink}
              href="https://kapustaapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={css.thirdHeading}>Kapusta</h3>
              <svg className={css.linkIcon} height="20" width="20">
                <use href="/images/icons.svg#icon-new-tab" />
              </svg>
              <span className={css.underline}></span>
            </a>
            <ul className={css.projectDetails}>
              <li className={css.projectTools}>
                HTML, CSS, Javascript, React, Redux, NodeJS, REST API
              </li>
              <li>Role: Team Lead</li>
              <li>Website app for managing finances.</li>
              <li>
                <div className={css.sourceContainer}>
                  <a
                    className={css.projectSource}
                    href="https://github.com/zetdou/goIT-group-project-react-node-gr4-front"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend source code
                    <svg className={css.linkIcon} height="15" width="15">
                      <use href="/images/icons.svg#icon-new-tab" />
                    </svg>
                    <span className={css.smallUnderline}></span>
                  </a>
                </div>
              </li>
              <li>
                <div className={css.sourceContainer}>
                  <a
                    className={css.projectSource}
                    href="https://github.com/PiotrKarys/Kapusta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend source code
                    <svg className={css.linkIcon} height="15" width="15">
                      <use href="/images/icons.svg#icon-new-tab" />
                    </svg>
                    <span className={css.smallUnderline}></span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={css.section}>
        <h2 className={css.secondHeading}>Source code</h2>
        <ul className={css.sourceCodeList}>
          <li>
            <div className={css.sourceContainer}>
              See the source code of this website
              <a
                className={css.websiteSource}
                href="https://github.com/Perslay/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
                <svg className={css.linkIcon} height="15" width="15">
                  <use href="/images/icons.svg#icon-new-tab" />
                </svg>
                <span className={css.smallUnderline}></span>
              </a>
              .
            </div>
          </li>
          <li>To see the rest of the projects, visit my Github profile.</li>
          <li className={css.funFactContainer}>
            <p className={css.funFact}>
              Did you know that this website is created using the{" "}
              <em className={css.emphasis}>golden ratio</em>? It is very common
              in nature, even in human proportions. The golden ratio is
              aesthetically pleasing and can be found in many famous works of
              art.
            </p>
            <div className={css.imageContainer}>
              <div className={css.funFactImg}></div>
              <div className={css.funFactLight}></div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Projects;
