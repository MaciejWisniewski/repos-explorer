import React from 'react';
import { Alert } from '@mui/material';
import { useUserStore } from '../stores/userStore';
import { styled } from '@mui/system';
import { RepositoryTile } from './RepositoryTile';

const Root = styled('div')`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

type RepositoriesListProps = {
  userId: number;
};

const RepositoriesList: React.FC<RepositoriesListProps> = ({ userId }) => {
  const userStore = useUserStore();

  return (
    <Root>
      {userStore.hasRepositories(userId) ? (
        userStore
          .getRepositories(userId)
          ?.map((repo) => (
            <RepositoryTile
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stargazersCount={
                repo.stargazers_count ? repo.stargazers_count : 0
              }
            />
          ))
      ) : (
        <>
          {userStore.assignedRepositories(userId) && (
            <Alert severity="info">No repos</Alert>
          )}
        </>
      )}
    </Root>
  );
};

export default RepositoriesList;
