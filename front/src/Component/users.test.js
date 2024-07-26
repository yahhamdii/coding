import React from 'react';
import { render, screen } from '@testing-library/react';
import ListUsers from './users';

describe('ListUsers component', () => {
  const users = [
    { firstName: 'Alice', lastName: 'Smith' },
    { firstName: 'Bob', lastName: 'Jones' },
    { firstName: 'Charlie', lastName: 'Doe' },
  ];

  it('renders a list of sorted users', () => {
    render(<ListUsers users={users} />);

    const listItems = screen.getAllByRole('listitem');
    
    
    expect(listItems).toHaveLength(users.length);

    const expectedNames = ['Charlie Doe', 'Bob Jones', 'Alice Smith'];
    const actualNames = listItems.map((item) => item.textContent);
    expect(actualNames).toEqual(expectedNames);
  });
});