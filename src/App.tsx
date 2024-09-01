import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import { AppDispatch } from './redux/store';
import { UserTable } from './components/UserTable';
import { SearchFilter } from './components/SearchFiflter';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <h1>User Management Table</h1>
      <SearchFilter />
      <UserTable />
    </Container>
  )
}
