import { Link } from "@tanstack/react-router";
import { BarChartHorizontalBig } from "lucide-react";

export default function Navbar() {
  return (
    <header className="p-4 flex gap-2 items-baseline justify-between shadow-md mb-6">
      <div className="flex items-center gap-2">
        <BarChartHorizontalBig />
        <span className="text-xl">Pollio</span>
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
