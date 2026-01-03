import Image from "next/image";

interface IMovieRowProps {
  sectionTitle: string;
}

interface IMovieCardProps {
  index: number;
}

const MovieCard = ({ index }: IMovieCardProps) => (
  <div className="group relative h-28 min-w-[200px] cursor-pointer rounded bg-linear-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100  md:hover:scale-110 hover:z-50 md:h-36 md:min-w-[260px]">
    <Image
      src={`/item_${index}.png`}
      alt={`Item ${index}`}
      fill={true}
      className="rounded" />
  </div>
)

export function MovieRow({ sectionTitle }: IMovieRowProps) {
  return <div className="flex-col space-y-4">
    <div className="flex">
      <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">{sectionTitle}</h2>
    </div>
    <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide">
      {[1, 2, 3, 4, 5].map((index) => (
        <MovieCard key={index} index={index} />
      ))}
    </div>
  </div>;
}
