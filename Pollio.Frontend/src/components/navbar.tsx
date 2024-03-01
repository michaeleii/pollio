import { Link } from "@tanstack/react-router";
import { BarChartHorizontalBig, Circle } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const { user } = useKindeAuth();

  return (
    <header className="p-4 shadow-md mb-6 sticky top-0 bg-background z-20">
      <div className="max-w-7xl mx-auto flex gap-2 items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-2 bg-gradient-to-br from-primary to-purple-500 rounded-lg">
              <BarChartHorizontalBig className="stroke-white" />
            </div>
            <span className="text-xl font-bold">Pollio</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          {user ? (
            <>
              <Link to="/create">
                <Button>Create Poll</Button>
              </Link>
              <Profile user={user} />
            </>
          ) : (
            <AuthButtons />
          )}
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
function AuthButtons() {
  const { login, register } = useKindeAuth();
  return (
    <div className="flex items-center gap-2">
      <Button onClick={() => register()}>Sign Up</Button>
      <Button onClick={() => login()}>Login</Button>
    </div>
  );
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useSignalR from "@/hooks/useSignalR";
import { KindeUser } from "@/types/types";

function Profile({ user }: { user: KindeUser }) {
  const { connection } = useSignalR("/r/pollhub");
  const { logout } = useKindeAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2 relative">
          <img
            src={
              user.picture ??
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt={user.given_name ?? "User"}
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
          <span>{user.given_name}</span>
          <span className="font-medium">
            {connection ? (
              <span className="text-green-600">Online</span>
            ) : (
              <span className="text-yellow-600">Connecting...</span>
            )}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => logout()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
