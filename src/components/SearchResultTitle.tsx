import React from 'react';
import { styled } from '@mui/system';
import { grey } from '../styles/colors';

const Root = styled('div')`
  text-align: left;
  width: 100%;
  margin-bottom: 1rem;
  color: ${grey[5]};
`;

type SearchResultTitleProps = {
  username: string;
};

export const SearchResultTitle: React.FC<SearchResultTitleProps> = ({
  username,
}) => {
  return (
    <Root data-testid="search-result-title">
      Showing users for "{username}"
    </Root>
  );
};
