import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface VideoItemProps {
  video: {
    thumbnail: string;
    title: string;
    description: string;
  };
  index: number;
}

const VideoItem: React.FC<VideoItemProps> = ({ video, index }) => {
  const [ref, inView] = useIntersectionObserver();
  const animationClass = index % 2 === 0 ? 'animate-fade-slide-in-left' : 'animate-fade-slide-in-right';

  return (
    <div
      ref={ref}
      className={`m-4 p-4 border rounded-lg shadow-lg max-w-xs transition-opacity duration-1000 ${inView ? animationClass : 'opacity-0'}`}
    >
      <img src={video.thumbnail} alt={video.title} className="rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoItem;
