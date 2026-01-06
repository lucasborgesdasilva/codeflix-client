import Header from "@/app/components/header";
import Player from "@/app/components/player";
import { getMovieById } from "@/app/service/movie-service";
import { Suspense } from "react";

interface IWatchProps {
  params: Promise<{
    id: string
  }>
}

export default async function Watch({ params }: IWatchProps) {
  const { id } = await params;
  const movie = await getMovieById(id);

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='font-bold text-2xl md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    )
  }

  return (
    <Player movie={movie} />
  )
}
