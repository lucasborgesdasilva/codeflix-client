import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchFormProps {
  searchTerm: string;
  onSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchForm = ({
  searchTerm,
  onSearchTermChange,
  onSearch
}: SearchFormProps) => {
  return (
    <form onSubmit={onSearch} className="flex items-center space-x-2">
      <button type="submit" className="cursor-pointer">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
      </button>

      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchTermChange}
        className="bg-transparent text-white placeholder-white outline-none"
      />
    </form>
  )
}