import React from 'react';
import { styled } from '@mui/system';
import { grey } from '../styles/colors';
import { Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Root = styled('div')`
  background-color: ${grey[3]};
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  margin-bottom: 0.5rem;
`;

const Headline = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bold;
`;

const Name = styled('div')`
  word-break: break-all;
  text-align: left;
`;

const Description = styled('div')`
  font-size: 0.9rem;
  text-align: left;
`;

type RepositoryTileProps = {
  name: string;
  description: string | null;
  stargazersCount: number;
};

export const RepositoryTile: React.FC<RepositoryTileProps> = ({
  name,
  description,
  stargazersCount,
}) => {
  return (
    <Root>
      <Headline>
        <Name>{name}</Name>
        <Stack direction="row" alignItems="center">
          {stargazersCount}
          <StarIcon sx={{ marginLeft: '.3rem', fontSize: '1.2rem' }} />
        </Stack>
      </Headline>
      <Description>{description}</Description>
    </Root>
  );
};
