export type Repository = {
  id: number;
  description: string | null;
  owner: { id: number };
  name: string;
  stargazers_count?: number;
};
