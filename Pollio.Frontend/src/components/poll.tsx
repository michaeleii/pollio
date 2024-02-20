import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { OptionList } from "@/components/option";
import { Poll } from "@/types/types";
import { Link } from "@tanstack/react-router";

export function PollList({ polls }: { polls: Poll[] }) {
  return (
    <div className="grid gap-6 mb-10">
      {polls.map((poll) => (
        <PollItem key={poll.id} link poll={poll} />
      ))}
    </div>
  );
}

export function PollItem({
  poll,
  link = false,
}: {
  poll: Poll;
  link?: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        {link ? (
          <Link
            to="/poll/$pollId"
            params={{ pollId: poll.id.toString() }}
            preload={false}
          >
            <CardTitle>{poll.question}</CardTitle>
          </Link>
        ) : (
          <CardTitle>{poll.question}</CardTitle>
        )}
        <CardDescription>
          {poll.user.username} • {formatDate(poll.createdAt)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <OptionList
          pollId={poll.id}
          totalVotes={poll.totalVotes}
          options={poll.options}
        />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground pl-2">
          {poll.totalVotes} Votes
        </p>
      </CardFooter>
    </Card>
  );
}
