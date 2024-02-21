import { Link } from "@tanstack/react-router";
import { BarChartHorizontalBig, Circle } from "lucide-react";
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
          <Profile />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useSignalR from "@/hooks/useSignalR";
function Profile() {
  const { connection } = useSignalR("/r/pollhub");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2 relative">
          <img
            src="https://avatars.githubusercontent.com/u/57844588?v=4"
            alt="michaellei"
            className="w-10 h-10 rounded-full"
          />
          {connection ? (
            <Circle
              className="absolute -bottom-1 -right-1.5 fill-green-600 stroke-background stroke-[5px]"
              size={18}
            />
          ) : (
            <Circle
              className="absolute -bottom-1 -right-1.5 fill-yellow-600 stroke-background stroke-[5px]"
              size={18}
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex flex-col">
          <span>michaellei</span>
          <span className="font-medium">
            {connection ? (
              <span className="text-green-600">Online</span>
            ) : (
              <span className="text-red-600">Connecting...</span>
            )}
          </span>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
