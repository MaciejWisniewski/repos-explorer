import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import { styled } from '@mui/system';
import { FormControlUnstyled } from '@mui/base';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UsernameForm: React.FC = () => {
  return (
    <FormControlUnstyled components={{ Root: Root }}>
      <Input placeholder="Enter username" autoFocus />
      <Button label="Search" />
    </FormControlUnstyled>
  );
};
