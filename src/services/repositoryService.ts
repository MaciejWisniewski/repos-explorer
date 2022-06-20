import { octokit } from './octokitService';
import { Repository } from '../types/repository';

export const getRepositoriesByUsername = async (
  username: string
): Promise<Repository[]> => {
  const { data } = await octokit.rest.repos.listForUser({ username });

  return data;
};
