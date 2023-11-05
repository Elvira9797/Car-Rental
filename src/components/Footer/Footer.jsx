import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p className={css.created}>
        Created by Elvira Lemak
        <>
          <a
            href="https://github.com/Elvira9797"
            target="_blank"
            rel="noreferrer"
            className={css.linkStyled}
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/elvira-lemak/"
            target="_blank"
            rel="noreferrer"
            className={css.linkStyled}
          >
            <AiFillLinkedin size={24} />
          </a>
        </>
      </p>
    </footer>
  );
};

export default Footer;
