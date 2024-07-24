import React from 'react';

interface Video {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const videos: Video[] = [
  {
    title: 'Introduction to Concrete Structures',
    description: 'Learn the basics of concrete structures.',
    thumbnail: 'assets/images/concrete.jpg',
    url: 'https://www.example.com/video1'
  },
  {
    title: 'Structural Analysis Techniques',
    description: 'Understand different techniques for structural analysis.',
    thumbnail: 'assets/images/structural-analysis.jpg',
    url: 'https://www.example.com/video2'
  },
  // Add more videos as needed
];

const Body: React.FC = () => {
  return (
    <div className="p-8">
      <p className="text-center mb-8">Découvrez nos vidéos de formation en génie civil.</p>
      <div className="flex flex-wrap justify-center">
        {videos.map((video, index) => (
          <div key={index} className="m-4 p-4 border rounded-lg shadow-lg max-w-xs">
            <img src={video.thumbnail} alt={video.title} className="rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
