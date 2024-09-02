import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { SearchFilter } from './SearchFiflter';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 12px 8px;
  text-align: center;
  background-color: #f4f4f4;
  font-weight: 500;
  font-size: 16px;
  color: #333;
  width: 25%;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px 8px;
  color: #555;
`;

const Tr = styled.tr`
  transition: background-color 0.3s ease-in-out;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const UserTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.filteredUsers);

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
        </Tr>
        <Tr>
          <Th colSpan={4} style={{padding: 0}}>
            <SearchFilter />
          </Th>
        </Tr>
      </thead>
      <tbody>
        {users.map(user => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};
