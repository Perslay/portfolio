import css from "./About.module.css";
import { useState } from "react";

const About = () => {
  const [isFirstBoxFocused, setIsFirstBoxFocused] = useState(false);
  const [isSecondBoxFocused, setIsSecondBoxFocused] = useState(false);
  const [isThirdBoxFocused, setIsThirdBoxFocused] = useState(false);
  const [isFourthBoxFocused, setIsFourthBoxFocused] = useState(false);

  return (
    <main className={css.about}>
      <h1 className={css.firstHeading}>About me</h1>
      <section className={css.section}>
        <h2 className={css.secondHeading}>Skills</h2>
        <ul className={css.skillsList}>
          <li
            className={css.skillsBox}
            onFocus={() => setIsFirstBoxFocused(true)}
            onBlur={() => setIsFirstBoxFocused(false)}
            onMouseOver={() => setIsFirstBoxFocused(true)}
            onMouseLeave={() => setIsFirstBoxFocused(false)}
            tabIndex={0}
            aria-label="Programming skills. Press Tab to see details."
          >
            <h3
              className={`${css.thirdHeading} ${
                isFirstBoxFocused ? css.visuallyHidden : ""
              }`}
            >
              Programming
            </h3>
            <ul
              className={`${css.boxList} ${css.flexBox} ${
                isFirstBoxFocused ? "" : css.visuallyHidden
              }`}
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
            onFocus={() => setIsSecondBoxFocused(true)}
            onBlur={() => setIsSecondBoxFocused(false)}
            onMouseOver={() => setIsSecondBoxFocused(true)}
            onMouseLeave={() => setIsSecondBoxFocused(false)}
            aria-label="Soft skills. Press Tab to see details."
          >
            <h3
              className={`${css.thirdHeading} ${
                isSecondBoxFocused ? css.visuallyHidden : ""
              }`}
            >
              Soft Skills
            </h3>
            <ul
              className={`${css.boxList} ${
                isSecondBoxFocused ? "" : css.visuallyHidden
              }`}
            >
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
            onFocus={() => setIsThirdBoxFocused(true)}
            onBlur={() => setIsThirdBoxFocused(false)}
            onMouseOver={() => setIsThirdBoxFocused(true)}
            onMouseLeave={() => setIsThirdBoxFocused(false)}
            aria-label="Artistic skills. Press Tab to see details."
          >
            <h3
              className={`${css.thirdHeading} ${
                isThirdBoxFocused ? css.visuallyHidden : ""
              }`}
            >
              Art
            </h3>
            <ul
              className={`${css.boxList} ${
                isThirdBoxFocused ? "" : css.visuallyHidden
              }`}
            >
              <li>Digital drawing</li>
              <li>Sketching</li>
              <li>Character design</li>
              <li>Color theory</li>
            </ul>
          </li>
          <li
            className={css.skillsBox}
            tabIndex={0}
            onFocus={() => setIsFourthBoxFocused(true)}
            onBlur={() => setIsFourthBoxFocused(false)}
            onMouseOver={() => setIsFourthBoxFocused(true)}
            onMouseLeave={() => setIsFourthBoxFocused(false)}
            aria-label="Spoken languages. Press Tab to see details."
          >
            <h3
              className={`${css.thirdHeading} ${
                isFourthBoxFocused ? css.visuallyHidden : ""
              }`}
            >
              Languages
            </h3>
            <ul
              className={`${css.boxList} ${
                isFourthBoxFocused ? "" : css.visuallyHidden
              }`}
            >
              <li>Polish - Native</li>
              <li>English - C1</li>
              <li>German - A2</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={css.section}>
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
              <li className={css.educationDescription}>
                <div className={css.schoolName}>
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
                </div>
                <div className={css.schoolInfo}>FullStack Developer</div>
              </li>
              <li className={css.schoolDate}>2023-2024</li>
            </ul>
          </li>
          <li className={css.educationItem}>
            <ul className={css.educationItemContent}>
              <li className={css.educationDescription}>
                <div className={css.schoolName}>
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
                </div>
                <div className={css.schoolInfo}>
                  Drawing and character design
                </div>
              </li>
              <li className={css.schoolDate}>2022</li>
            </ul>
          </li>
          <li className={css.educationItem}>
            <ul className={css.educationItemContent}>
              <li className={css.educationDescription}>
                <div className={css.schoolName}>NOVA Education Center</div>
                <div className={css.schoolInfo}>IT Technician</div>
              </li>
              <li className={css.schoolDate}>2018-2020</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={css.section}>
        <h2 className={css.secondHeading}>Interests</h2>
        <ul className={css.interestsList}>
          <li className={css.interestsItem}>
            <div className={css.bgLight}></div>
            <div className={css.interestBox}>
              <h3 className={css.thirdHeading}>Ornithology</h3>
              <p className={css.interestText}>
                The avian creatures come with different shapes, colors and
                sounds. They inspire humans with their beauty and ability to
                fly.
              </p>
            </div>
          </li>
          <li className={css.interestsItem}>
            <div className={css.bgLight}></div>
            <div className={css.interestBox}>
              <h3 className={css.thirdHeading}>Drawing</h3>
              <p className={css.interestText}>
                Art helps humans express themselves and process emotions.
              </p>
              <p className={css.interestText}>
                I chose drawing because I mainly think with images and it feels
                most natural to me.
              </p>
            </div>
          </li>
          <li className={css.interestsItem}>
            <div className={css.bgLight}></div>
            <div className={css.interestBox}>
              <h3 className={css.thirdHeading}>Video games</h3>
              <p className={css.interestText}>
                Games are a wonderful way to have fun. Combined with the
                artificial environment, they can provide unique and immersive
                experience.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
