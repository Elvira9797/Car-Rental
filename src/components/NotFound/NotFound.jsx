import css from './NotFound.module.css';
import notFound from '../../assets/images/not-found.png';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Container from 'components/Container';

const NotFound = () => {
  return (
    <Container>
      <Link className={css.linkBack} to="/">
        <BsArrowLeft color="#3470FF" />
        Return to home page
      </Link>
      <img className={css.img} src={notFound} alt="Not found page" />
    </Container>
  );
};

export default NotFound;
