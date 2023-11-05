import { useNavigate } from 'react-router-dom';
import css from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={css.hero}>
      <h1 className={css.title}>
        Discover the Perfect Car for Your Journey: Car Rental for Every Taste
        and Budget
      </h1>
      <button className={css.button} type="button" onClick={handleClick}>
        Rental car
      </button>
    </section>
  );
};

export default Hero;
