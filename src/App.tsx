import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import { AppDispatch } from './redux/store';
import { UserTable } from './components/UserTable';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 500;
`;

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Title>User Management Table</Title>
      <UserTable />
    </Container>
  )
}
