import { Octokit } from 'octokit';

const octokit = new Octokit();

export const getUsersMatchedByLogin = async (
  usersCount: number,
  username: string
) => {
  const { data } = await octokit.rest.search.users({
    q: `${username} in:login`,
    per_page: usersCount,
  });

  return data.items;
};
