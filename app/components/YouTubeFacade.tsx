'use client';

import { useState } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        width="315"
        height="560"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="block"
      />
    );
  }

  return (
    <button
      onClick={loadVideo}
      className="relative w-[315px] h-[560px] bg-black cursor-pointer group"
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail image - using YouTube's high quality thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        width={315}
        height={560}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-2xl">
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-white ml-1"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      {/* Subtle gradient overlay for better button visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
    </button>
  );
}
