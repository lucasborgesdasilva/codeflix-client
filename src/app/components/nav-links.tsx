import Link from "next/link";

export const NavLinks = () => (
  <nav>
    <ul className="hidden md:flex md:space-x-4">
      <Link href="/search?genre=Comedy">
        <li>Comedy</li>
      </Link>
      <Link href="/search?genre=Action">
        <li>Action</li>
      </Link>
      <Link href="/search?genre=Adventure">
        <li>Adventure</li>
      </Link>
      <Link href="/search?genre=Animation">
        <li>Animation</li>
      </Link>
    </ul>
  </nav>
);
