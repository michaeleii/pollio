export interface Poll {
  id: number;
  question: string;
  totalVotes: number;
  createdAt: string;
  user: User;
  options: {
    id: number;
    text: string;
    selected: boolean;
    votes: number;
    allVotes: string[];
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type KindeUser = {
  given_name: string | null;
  id: string | null;
  family_name: string | null;
  email: string | null;
  picture: string | null;
};
