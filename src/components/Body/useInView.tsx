import { useEffect, useState, useRef } from 'react';

const useInView = (threshold = 0.2) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (window.scrollY >= 30) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return [ref, inView] as const;
};

export default useInView;
