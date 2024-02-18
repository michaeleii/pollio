import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <header className="p-4 flex gap-2 items-baseline justify-between">
      <div className="text-xl">Pollio</div>
      <nav className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
