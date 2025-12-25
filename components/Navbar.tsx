import Link from "next/link";
import Image from "next/image";

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="bg-black hover:bg-amber-500 text-white p-3 rounded-2xl">
      {children}
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="p-6 w-100">
      <div className="flex">
        <Image
          className="rounded-full shadow-xl" // Tailwind classes
          src="https://placecats.com/300/300"
          alt="User profile"
          width={100}
          height={100}
          priority
        />
        <div className="flex gap-2 py-6 pl-6">
          <p>Jorge Garcia</p>
        </div>
      </div>
      <nav className="py-6 items-center">
        <ol className="flex flex-col gap-2 group">
          <NavItem>
            <Link href="/">News Feed</Link>
          </NavItem>
          <NavItem>
            <Link href="/profile">Profile</Link>
          </NavItem>
          <NavItem>
            <Link href="/friends">Friends</Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
        </ol>
      </nav>
    </div>
  );
}
