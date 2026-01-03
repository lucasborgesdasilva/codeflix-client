import { Banner } from "./components/banner";
import Header from "./components/header";
import { MovieRow } from "./components/movie-row";
import { getFeaturedMovie, getMoviesByGenre } from "./service/movie-service";

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('106');
  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];
  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      console.log(movies);
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className="relative h-screen overflow-hidden bg-linear-to-b from-trasparent to-70% to-[#141414] lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie} />

        {movies.map(movie => (
          console.log(movie),
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  );
}
