import * as userService from '../services/userService';
import * as repositoryService from '../services/repositoryService';
import { User } from '../types/user';
import { Repository } from '../types/repository';

export const mockUsers = (users: User[]) => {
  const mockGetUsersMatchedByLogin = jest.spyOn(
    userService,
    'getUsersMatchedByLogin'
  );
  mockGetUsersMatchedByLogin.mockResolvedValue(users);
};

export const mockRepositories = (repos: Repository[]) => {
  const mockGetRepositoriesByUsername = jest.spyOn(
    repositoryService,
    'getRepositoriesByUsername'
  );
  mockGetRepositoriesByUsername.mockResolvedValue(repos);
};
