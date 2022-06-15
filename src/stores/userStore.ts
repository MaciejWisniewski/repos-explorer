import { createContext, useContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { User } from '../types/user';

class UserStore {
  username: string = '';
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      username: observable,
      users: observable,
      setUsers: action,
      setUsername: action,
    });
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  setUsername(username: string) {
    this.username = username;
  }
}

const userContext = createContext(new UserStore());

export const useUserStore = () => useContext(userContext);
