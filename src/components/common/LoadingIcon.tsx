import { styled } from '@mui/system';
import React from 'react';

const Root = styled('div')`
  margin: 1rem;
`;

const LoadingIcon: React.FC = () => {
  return <Root>Loading...</Root>;
};

export default LoadingIcon;
