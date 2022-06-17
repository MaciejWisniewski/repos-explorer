import { createContext, useContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { User } from '../types/user';
import { Repository } from '../types/repository';

class UserStore {
  username: string = '';
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      username: observable,
      users: observable,
      setUsers: action,
      setUsername: action,
      assignRepositories: action,
    });
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  setUsername(username: string) {
    this.username = username;
  }

  assignRepositories(userId: number, repositories: Repository[]) {
    const user = this.users.find((u) => u.id === userId)!;
    user.repositories = repositories;

    this.users = [...this.users];
  }

  assignedRepositories(userId: number): Boolean {
    return this.users.find((u) => u.id === userId)?.repositories !== undefined;
  }

  hasRepositories(userId: number): Boolean {
    const repos = this.users.find((u) => u.id === userId)!.repositories;
    return repos !== undefined && repos.length > 0;
  }

  getRepositories(userId: number): Repository[] | undefined {
    return this.users.find((u) => u.id === userId)!.repositories;
  }
}

const userContext = createContext(new UserStore());

export const useUserStore = () => useContext(userContext);
