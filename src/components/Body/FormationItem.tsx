import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface Formation {
  id: number;
  name: string;
  duree: string;
  description: string;
  price: number;
  image: string;
  video: string;
}

interface FormationItemProps {
  formation: Formation;
  index: number;
}

const FormationItem: React.FC<FormationItemProps> = ({ formation, index }) => {
  const [ref, inView] = useIntersectionObserver();
  const animationClass = index % 2 === 0 ? 'animate-fade-slide-in-left' : 'animate-fade-slide-in-right';

  return (
    <div
      ref={ref}
      className={`m-4 p-4 border rounded-lg shadow-lg max-w-xs transition-opacity duration-1000 ${inView ? animationClass : 'opacity-0'}`}
    >
      <img src={formation.image} alt={formation.name} className="rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">{formation.name}</h3>
      <p>{formation.description}</p>
      <p><strong>Duree:</strong> {formation.duree}</p>
      <p><strong>Price:</strong> ${formation.price.toFixed(2)}</p>
      <a href={formation.video} target="_blank" rel="noopener noreferrer" className="text-blue-500">Watch Video</a>
    </div>
  );
};

export default FormationItem;
