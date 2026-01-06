'use client'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import '@vidstack/react/player/styles/base.css';
import Link from 'next/link';
import { useState } from 'react';
import { Movie } from "../types/movie";

export default function Player({ movie }: { movie: Movie }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex h-screen justify-center align-middle">
      <MediaPlayer
        controls
        title={movie.title}
        src={movie.videoFileURL}
        className='ring-media-focus aspect-video w-full rounded-md bg-black'
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <Link href="/">
          <ArrowLeftIcon className={`${isPlaying ? 'opacity-0' : ''} invisible absolute left-8 top-8 z-50 h-8 w-8 cursor-pointer text-white md:visible`} />
        </Link>

        <div className={`visible absolute left-2 top-8 z-50 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : ''} md:invisible`}>
          <div className='flex flex-row items-center gap-4'>
            <Link href="/">
              <ArrowLeftIcon className="h-6" />
            </Link>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {movie.title}
            </h1>
          </div>
        </div>

        <MediaProvider className='relative mx-auto flex aspect-video max-w-fit justify-center rounded-md align-middle'>
          <div className={`${isPlaying ? 'opacity-0' : ''} invisible absolute left-8 top-96 z-50 transition-opacity duration-500 md:visible`}>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              {movie.title}
            </h1>
            <p className='text-shadow-md mt-4 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
              {movie.description}
            </p>
          </div>
        </MediaProvider>
      </MediaPlayer>
    </div>
  )
}
