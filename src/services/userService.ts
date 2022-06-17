import { octokit } from './octokitService';
import { User } from '../types/user';

export const getUsersMatchedByLogin = async (
  usersCount: number,
  username: string
): Promise<User[]> => {
  const { data } = await octokit.rest.search.users({
    q: `${username} in:login`,
    per_page: usersCount,
  });

  return data.items;
};
