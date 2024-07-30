import React from 'react';
import { useState } from 'react';
import MVideo from './MVideo';
import Modal from './Modal';
import useIntersectionObserver from './useIntersectionObserver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

interface Formation {
  id: number;
  name: string;
  duree: string;
  description: string;
  price: number;
  image: string;
  video: string;
  pay:boolean;
}

interface FormationItemProps {
  formation: Formation;
  index: number;
}

const FormationItem: React.FC<FormationItemProps> = ({ formation, index }) => {
  const [showModal, setShowModal] = useState(false);

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [ref, inView] = useIntersectionObserver();
  const animationClass = index % 2 === 0 ? 'animate-fade-slide-in-left' : 'animate-fade-slide-in-right';

  return (
    <div
      ref={ref}
      className={`m-4 p-4 flex flex-col items-center border rounded-lg shadow-lg max-w-lg transition-opacity duration-1000 ${inView ? animationClass : 'opacity-0'}`}
    >
      <img src="/images/civil.jpg" alt={formation.name} className="rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">{formation.name}</h3>
      <p><strong>Duree:</strong> {formation.duree}</p>
      <p><strong>Prix:</strong> {formation.price.toFixed(2)} DH</p>
      <a href="#" onClick={handleVideoClick} className="text-blue-500">Details</a>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        videoUrl={formation.video}
        name={formation.name}
        description={formation.description}
        duree={formation.duree}
        price={formation.price}
        pay={formation.pay}
      />
    </div>
  );
};

export default FormationItem;
