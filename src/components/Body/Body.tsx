import React from 'react';
import VideoItem from './VideoItem';

interface Video {
  thumbnail: string;
  title: string;
  description: string;
}

const videos: Video[] = [
  {
    thumbnail: 'path/to/thumbnail1.jpg',
    title: 'Video Title 1',
    description: 'Description for video 1',
  },
  {
    thumbnail: 'path/to/thumbnail2.jpg',
    title: 'Video Title 2',
    description: 'Description for video 2',
  },
  // Add more videos as needed
];

const Body: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className='text-orange-500 text-3xl font-bold'>Formations</h1>
      <div className="flex flex-wrap justify-center">
      {videos.map((video, index) => (
        <VideoItem key={index} video={video} index={index} />
      ))}
      </div>
    </div>
  );
};

export default Body;
