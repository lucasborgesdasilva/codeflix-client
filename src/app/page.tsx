import { Banner } from "./components/banner";
import Header from "./components/header";
import { MovieRow } from "./components/movie-row";
import { getFeaturedMovie } from "./service/movie-service";

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('106');

  return (
    <div className="relative h-screen overflow-hidden bg-linear-to-b from-trasparent to-70% to-[#141414] lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie} />

        <MovieRow sectionTitle="Trending Now" />
        <MovieRow sectionTitle="Top Rated" />
        <MovieRow sectionTitle="Action Movies" />
      </main>
    </div>
  );
}
