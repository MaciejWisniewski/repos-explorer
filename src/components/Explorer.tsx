import React from 'react';
import { UsernameForm } from './UsernameForm';
import { styled } from '@mui/system';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  max-width: 30rem;
`;

export const Explorer: React.FC = () => {
  return (
    <Root>
      <UsernameForm />
    </Root>
  );
};
