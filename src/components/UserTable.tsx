import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
