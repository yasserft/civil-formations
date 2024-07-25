import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormationItem from './FormationItem';

interface Formation {
  id: number;
  name: string;
  duree: string;
  description: string;
  price: number;
  image: string;
  video: string;
}

/*const formations: Formation[] = [
  {
    id: 1,
    name: 'Formation 1',
    duree: '3 months',
    description: 'Description for Formation 1',
    price: 200.00,
    image: 'path/to/image1.jpg',
    video: 'path/to/video1.mp4',
  },
  {
    id: 2,
    name: 'Formation 2',
    duree: '6 months',
    description: 'Description for Formation 2',
    price: 400.00,
    image: 'path/to/image2.jpg',
    video: 'path/to/video2.mp4',
  },
];
*/
const Body: React.FC = () => {

  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/formations');
        setFormations(response.data);
      } catch (error) {
        console.error('Error fetching formations:', error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <div className="p-8" id='formations'>
      <h1 className='text-orange-500 text-3xl font-bold'>Formations</h1>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {formations.map((formation, index) => (
          <FormationItem key={formation.id} formation={formation} index={index} />
        ))}
      </div>
    </div>
  );
};
/*

const Body: React.FC = () => {
  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/formations');
        setFormations(response.data);
      } catch (error) {
        console.error('Error fetching formations:', error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <div className="p-8">
      <h1 className='text-orange-500 text-3xl font-bold'>Formations</h1>
      <div className="flex flex-wrap justify-center">
        {formations.map((formation, index) => (
          <FormationItem key={formation.id} formation={formation} index={index} />
        ))}
      </div>
    </div>
  );
};
*/
export default Body;
