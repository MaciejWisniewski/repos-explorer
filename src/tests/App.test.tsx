import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';
import { mockRepositories, mockUsers } from './utils';

jest.mock('../services/userService');
jest.mock('../services/repositoryService');

//TODO: Get rid off 'test was not wrapped in act(...) warnings
describe('rendering', () => {
  describe('searching', () => {
    test('renders search input with a valid placeholder', () => {
      render(<App />);

      const input = screen.getByPlaceholderText('Enter username');

      expect(input).toBeInTheDocument();
    });

    test('renders search button with a valid label', () => {
      render(<App />);

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button.childNodes[0].nodeValue).toEqual('Search');
    });

    test('renders search button disabled', () => {
      render(<App />);

      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
    });

    test('keeps search button disabled after typing 1 character', async () => {
      render(<App />);

      const input = screen.getByPlaceholderText('Enter username');
      userEvent.type(input, 'a');

      expect(screen.getByRole('button')).toBeDisabled();
    });

    test('keeps search button disabled after typing 2 characters', () => {
      render(<App />);

      const input = screen.getByPlaceholderText('Enter username');
      userEvent.type(input, 'aa');
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
    });

    test('enables search button after typing 3 characters', () => {
      render(<App />);

      const input = screen.getByPlaceholderText('Enter username');
      userEvent.type(input, 'aaa');
      const button = screen.getByRole('button');

      expect(button).not.toBeDisabled();
    });

    test('renders searched username in the result title', async () => {
      render(<App />);
      mockUsers([]);

      const input = screen.getByPlaceholderText('Enter username');
      const button = screen.getByRole('button');
      const typedValue = 'user1';
      userEvent.type(input, typedValue);
      userEvent.click(button);

      await waitFor(
        () => {
          const resultTitle = screen.getByTestId('search-result-title');

          expect(resultTitle).toBeInTheDocument();
          expect(resultTitle.textContent).toContain(typedValue);
        },
        { timeout: 2000 }
      );
    });
  });

  describe('user tabs', () => {
    test('displays user tabs', async () => {
      render(<App />);
      const user1 = { id: 1, login: 'user1' };
      const user2 = { id: 2, login: 'user2' };
      mockUsers([user1, user2]);

      const input = screen.getByPlaceholderText('Enter username');
      const button = screen.getByRole('button');
      userEvent.type(input, 'user');
      userEvent.click(button);

      await waitFor(() => {
        const tab1 = screen.getByText(user1.login);
        const tab2 = screen.getByText(user2.login);

        expect(tab1).toBeInTheDocument();
        expect(tab2).toBeInTheDocument();
      });
    });

    test('displays no-users alert', async () => {
      render(<App />);
      mockUsers([]);

      const input = screen.getByPlaceholderText('Enter username');
      const button = screen.getByRole('button');
      const typedValue = 'userfead';
      userEvent.type(input, typedValue);
      userEvent.click(button);

      await waitFor(() => {
        expect(screen.queryByText(typedValue)).not.toBeInTheDocument();
        expect(screen.getByTestId('no-users-alert')).toBeInTheDocument();
      });
    });
  });

  describe('user repositories', () => {
    const user = { id: 1, login: 'user' };
    const repository = {
      id: 1,
      description: 'Repo description',
      owner: { id: user.id },
      name: 'Repo1',
      stargazers_count: 5,
    };

    test('displays user repositories', async () => {
      render(<App />);
      mockUsers([user]);
      mockRepositories([repository]);

      const input = screen.getByPlaceholderText('Enter username');
      const button = screen.getByRole('button');
      userEvent.type(input, user.login);
      userEvent.click(button);

      await waitFor(
        () => {
          const tab = screen.getByText(user.login);
          userEvent.click(tab);
        },
        { timeout: 2000 }
      );

      await waitFor(() => {
        const repo = screen.getByText('Repo1');
        expect(repo).toBeInTheDocument();
      });
    });
  });
});
