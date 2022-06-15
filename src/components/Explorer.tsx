import React from 'react';
import { observer } from 'mobx-react-lite';
import { UsernameForm } from './UsernameForm';
import { styled } from '@mui/system';
import { useUserStore } from '../stores/userStore';
import { Alert } from '@mui/material';
import { User } from './User';
import { SearchResultTitle } from './SearchResultTitle';

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  max-width: 30rem;
`;

export const Explorer: React.FC = observer(() => {
  const userStore = useUserStore();
  return (
    <Root>
      <UsernameForm />
      {userStore.username && (
        <SearchResultTitle username={userStore.username} />
      )}

      {userStore.users.length > 0 ? (
        userStore.users.map((user) => (
          <User key={user.id} username={user.login} />
        ))
      ) : (
        <>
          {userStore.username && (
            <Alert severity="info" sx={{ width: '100%' }}>
              No users
            </Alert>
          )}
        </>
      )}
    </Root>
  );
});
