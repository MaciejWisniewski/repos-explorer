import React, { useState } from 'react';
import { styled } from '@mui/system';
import { grey } from '../styles/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getRepositoriesByUsername } from '../services/repositoryService';
import { useUserStore } from '../stores/userStore';
import { observer } from 'mobx-react-lite';

const Root = styled('div')`
  width: 100%;
`;

const Tab = styled('div')`
  padding: 0.5rem;
  width: 100%;
  background-color: ${grey[1]};
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type UserTabProps = {
  userId: number;
  username: string;
};

export const UserTab: React.FC<UserTabProps> = observer(
  ({ userId, username }) => {
    const [open, setOpen] = useState<boolean>(false);

    const userStore = useUserStore();

    const handleClick = async () => {
      if (!userStore.hasRepositories(userId)) {
        const repos = await getRepositoriesByUsername(username);
        userStore.assignRepositories(userId, repos);
      }

      setOpen(!open);
    };

    return (
      <Root>
        <Tab onClick={handleClick}>
          <div>{username}</div>
          <KeyboardArrowDownIcon />
        </Tab>
      </Root>
    );
  }
);
