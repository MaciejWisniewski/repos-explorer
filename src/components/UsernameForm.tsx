import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import { getUsersMatchedByLogin } from '../services/userService';
import { useUserStore } from '../stores/userStore';
import { User } from '../types/user';

const useStyles = makeStyles({
  form: { width: '100%' },
});

export const UsernameForm: React.FC = () => {
  const classes = useStyles();
  const userStore = useUserStore();
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: async (values) => {
      const users: User[] = await getUsersMatchedByLogin(5, values.username);
      userStore.setUsers(users);
      userStore.setUsername(values.username);
    },
  });

  return (
    <>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Enter username"
          autoFocus
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <Button
          label="Search"
          type="submit"
          disabled={formik.values.username.length < 3}
        />
      </form>
    </>
  );
};
