export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between p-4 lg:px-10 lg:py-6 transition-all">
      <div className="flex items-center space-x-2 md:space-x-8">
        <img src="./logo.svg" alt="netflix" width={120} height={120} />
        <ul className="hidden md:flex md:space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">
          Kids
        </p>
        <img src="./profile.png" alt="profile" className="cursor-pointer rounded" />
      </div>
    </header>
  )
}