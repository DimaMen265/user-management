import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/userSlice';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SearchInput = styled.input`
  padding: 12px 8px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-right: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  text-align: center;

  &:last-child {
    border-right: none;
  }

  &::placeholder {
    text-align: center;
    transition: opacity 0.3s ease-in-out;
  }

  &:focus::placeholder {
    opacity: 0; 
  }
`;

type FilterKey = 'name' | 'username' | 'email' | 'phone';

export const SearchFilter: React.FC = () => {
    const dispatch = useDispatch();

    const handleChange = (key: FilterKey) => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter({ key, value: event.target.value }));
    };

    return (
        <SearchContainer>
            <SearchInput placeholder="Enter name..." onChange={handleChange('name')} />
            <SearchInput placeholder="Enter username..." onChange={handleChange('username')} />
            <SearchInput placeholder="Enter email..." onChange={handleChange('email')} />
            <SearchInput placeholder="Enter phone..." onChange={handleChange('phone')} />
        </SearchContainer>
    );
};
