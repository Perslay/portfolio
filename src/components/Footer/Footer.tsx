import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={css.footerBackground}>
      <div className={css.footer}>
        <h3 className={css.heading}>Contact</h3>
        <address className={css.address}>
          <div className={css.textLinks}>
            <div className={css.textLine}>
              <svg className={css.textLinkIcon} height="22" width="22">
                <use href="/portfolio/images/icons.svg#icon-phone" />
              </svg>
              <div className={css.linkContainer}>
                <a className={css.textLink} href="tel:+48505752209">
                  +48 505 752 209
                </a>
                <div className={css.underline}></div>
              </div>
            </div>
            <div className={css.textLine}>
              <svg className={css.textLinkIcon} height="22" width="22">
                <use href="/portfolio/images/icons.svg#icon-envelop" />
              </svg>
              <div className={css.linkContainer}>
                <a
                  className={css.textLink}
                  href="mailto:natalia.44.fedyk@gmail.com"
                >
                  natalia.44.fedyk@gmail.com
                </a>
                <div className={css.underline}></div>
              </div>
            </div>
          </div>
          <div className={css.imageLinks}>
            <div>
              <a
                className={css.imageLink}
                href="https://github.com/Perslay"
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby="github-profile"
              >
                <svg className={css.githubIcon} width="48" height="48">
                  <use href="/portfolio/images/icons.svg#icon-github" />
                </svg>
              </a>
            </div>
            <div>
              <a
                className={`${css.imageLink} ${css.linkedinLink}`}
                href="https://www.linkedin.com/in/natalia-fedyk-057961300/"
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby="linkedin-profile"
              >
                <svg className={css.linkedinIcon} width="25" height="25">
                  <use href="/portfolio/images/icons.svg#icon-linkedin2" />
                </svg>
              </a>
            </div>
          </div>
        </address>
      </div>
    </div>
  );
};
