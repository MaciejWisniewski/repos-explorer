import { createContext, useContext } from 'react';
import { action, makeObservable, observable } from 'mobx';
import { User } from '../types/user';

class UserStore {
  users: User[] = [];

  constructor() {
    makeObservable(this, {
      users: observable,
      setUsers: action,
    });
  }

  setUsers(users: User[]) {
    this.users = users;
  }
}

const userContext = createContext(new UserStore());

export const useUserStore = () => useContext(userContext);
