import css from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={css.mainExperience}>
      <h1 className={css.firstHeading}>Skills and Education</h1>
      <h2 className={css.secondHeading}>Skills</h2>
      <ul className={css.skillsList}>
        <li
          className={css.skillsBox}
          tabIndex={0}
          aria-label="Programming skills. Press Tab to see details."
        >
          <h3 className={css.thirdHeading}>Programming</h3>
          <ul
            className={`${css.boxList} ${css.flexBox} visuallyHidden`}
            aria-hidden="true"
          >
            <li className={css.boxColumn}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </li>
            <li className={css.boxColumn}>
              <ul>
                <li>Redux</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </ul>
            </li>
          </ul>
        </li>
        <li
          className={css.skillsBox}
          tabIndex={0}
          aria-label="Soft skills. Press Tab to see details."
        >
          <h3 className={css.thirdHeading}>Soft Skills</h3>
          <ul className={`${css.boxList} visuallyHidden`}>
            <li>Teamwork</li>
            <li>Attention to details</li>
            <li>Problem solving</li>
            <li>Creativity</li>
            <li>Accountability</li>
            <li>Patience</li>
          </ul>
        </li>
        <li
          className={css.skillsBox}
          tabIndex={0}
          aria-label="Artistic skills. Press Tab to see details."
        >
          <h3 className={css.thirdHeading}>Art</h3>
          <ul className={`${css.boxList} visuallyHidden`}>
            <li>Digital drawing</li>
            <li>Sketching</li>
            <li>Character design</li>
            <li>Color theory</li>
          </ul>
        </li>
        <li
          className={css.skillsBox}
          tabIndex={0}
          aria-label="Spoken languages. Press Tab to see details."
        >
          <h3 className={css.thirdHeading}>Languages</h3>
          <ul className={`${css.boxList} visuallyHidden`}>
            <li>Polish - Native</li>
            <li>English - C1</li>
            <li>German - A2</li>
          </ul>
        </li>
      </ul>
      <div className={css.education}>
        <h2 className={css.secondHeading}>Education</h2>
        <ul className={css.educationList}>
          <li className={css.educationItem}>
            <ul className={css.educationItemContent}>
              <li className={css.schoolName}>TypeScript Course</li>
              <li className={css.schoolDate}>2024</li>
            </ul>
          </li>
          <li className={css.educationItem}>
            <ul className={css.educationItemContent}>
              <li className={css.schoolName}>
                <a
                  className={css.certificateLink}
                  href="./certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IT School GoIT
                  <svg className={css.linkIcon} height="15" width="15">
                    <use href="/portfolio/images/icons.svg#icon-new-tab" />
                  </svg>
                  <span className={css.underline}></span>
                </a>
              </li>
              <li>FullStack Developer</li>
              <li className={css.schoolDate}>2023-2024</li>
            </ul>
          </li>
          <li className={css.educationItem}>
            <ul className={css.educationItemContent}>
              <li className={css.schoolName}>
                <a
                  className={css.certificateLink}
                  href="https://api.strefakursow.pl/api/v2/public/certificate/pdf/3oqtaqn7f7y8k0kc0c8oso8k4cg8ws/ENG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Concept Art Course
                  <svg className={css.linkIcon} height="15" width="15">
                    <use href="/portfolio/images/icons.svg#icon-new-tab" />
                  </svg>
                  <span className={css.underline}></span>
                </a>
              </li>
              <li>Drawing and character design</li>
              <li className={css.schoolDate}>2022</li>
            </ul>
          </li>
          <li className={css.educationItem}>
            <ul className={css.educationItemContent}>
              <li className={css.schoolName}>NOVA School</li>
              <li>IT Technician</li>
              <li className={css.schoolDate}>2018-2020</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
