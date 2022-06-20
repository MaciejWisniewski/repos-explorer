import { Repository } from './repository';

export type User = {
  id: number;
  login: string;
  repositories?: Repository[];
};
