import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { UsernameForm } from './UsernameForm';
import { styled } from '@mui/system';
import { useUserStore } from '../stores/userStore';
import { Alert } from '@mui/material';
import { UserTab } from './UserTab';
import { SearchResultTitle } from './SearchResultTitle';
import LoadingIcon from './common/LoadingIcon';

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
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Root>
      <UsernameForm setLoading={setLoading} />
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          {userStore.username && (
            <SearchResultTitle username={userStore.username} />
          )}
          {userStore.users.length > 0 ? (
            userStore.users.map((user) => (
              <UserTab key={user.id} userId={user.id} username={user.login} />
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
        </>
      )}
    </Root>
  );
});
