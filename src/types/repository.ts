export type Repository = {
  id: number;
  description: string | null;
  owner: { id: number };
  full_name: string;
  stargazers_count?: number;
};
