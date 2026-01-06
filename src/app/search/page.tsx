import { Suspense } from 'react';
import Header from '../components/header';
import { MovieCard } from '../components/movie-card';
import { searchMovies } from '../service/movie-service';

interface ISearchResultsParams {
  title?: string;
  genre?: string;
}

interface ISearchResultsProps {
  searchParams: Promise<ISearchResultsParams>;
}

export default async function SearchResults({ searchParams }: ISearchResultsProps) {
  const { title, genre } = await searchParams;

  const movies = await searchMovies(title, genre);

  if (movies.length === 0) {
    return (
      <div>
        <div className='relative bg-linear-to-b pb-8'>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16'>
            <h1 className='font-bold text-2xl mb-4'>
              Search Results for: <span className='text-red-500'>{title}</span>
            </h1>
            <p className='text-xl'>No movies found.</p>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='relative bg-linear-to-b pb-8'>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className='relative mb-48 mt-20 h-screen px-4 lg:px-16'>
          <h1 className='font-bold text-2xl mb-4'>
            Search Results for: <span className='text-red-500'>{title}</span>
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 lg:gap-8">
            {movies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
