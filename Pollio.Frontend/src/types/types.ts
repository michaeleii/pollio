export interface Poll {
  id: number;
  question: string;
  totalVotes: number;
  createdAt: string;
  user: {
    id: number;
    username: string;
    createdAt: string;
  };
  options: {
    id: number;
    text: string;
    selected: boolean;
    votes: number;
  }[];
}
export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  polls: Poll[];
  votes: Vote[];
  createdAt: Date;
}

export interface Option {
  id: number;
  text: string;
  poll: Poll;
  pollId: number;
  votes: Vote[];
  voteCount: number;
  createdAt: Date;
}

export interface Vote {
  id: number;
  poll: Poll;
  pollId: number;
  user: User;
  userId: number;
  option: Option;
  optionId: number;
  createdAt: Date;
}
