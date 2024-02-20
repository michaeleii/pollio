import { Link } from "@tanstack/react-router";
import { BarChartHorizontalBig } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <header className="p-4 shadow-md mb-6 sticky top-0 bg-background z-20">
      <div className="max-w-7xl mx-auto flex gap-2 items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <BarChartHorizontalBig />
            <span className="text-xl">Pollio</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/create">
            <Button>Create Poll</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
