import React from 'react';
import { styled } from '@mui/system';
import { grey } from '../styles/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Root = styled('div')`
  padding: 0.5rem;
  width: 100%;
  background-color: ${grey[1]};
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type UserProps = {
  username: string;
};

export const User: React.FC<UserProps> = ({ username }) => {
  return (
    <Root>
      <div>{username}</div>
      <KeyboardArrowDownIcon />
    </Root>
  );
};
