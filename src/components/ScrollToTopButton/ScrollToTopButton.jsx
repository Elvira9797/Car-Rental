import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import css from './ScrollToTopButton.module.css';
import clsx from 'clsx';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTrigger = 600;

    setIsVisible(scrollY > scrollTrigger);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={clsx(css.btnToTop, isVisible ? css.visible : '')}
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardArrowUp color="white" size={24} />
      <p className={css.text}>Back to Top</p>
    </button>
  );
};

export default ScrollToTopButton;
