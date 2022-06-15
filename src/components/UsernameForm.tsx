import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles({
  form: { width: '100%' },
});

export const UsernameForm: React.FC = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
