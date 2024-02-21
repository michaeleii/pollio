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

export type KindeUser = {
  given_name: string | null;
  id: string | null;
  family_name: string | null;
  email: string | null;
  picture: string | null;
};
