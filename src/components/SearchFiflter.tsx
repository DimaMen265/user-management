import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/userSlice';
import { styled } from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 20%;
`;

type FilterKey = 'name' | 'username' | 'email' | 'phone';

export const SearchFilter: React.FC = () => {
    const dispatch = useDispatch();

    const handleChange = (key: FilterKey) => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter({ key, value: event.target.value }));
    };

    return (
        <SearchContainer>
            <SearchInput placeholder="Filter by Name" onChange={handleChange('name')} />
            <SearchInput placeholder="Filter by Username" onChange={handleChange('username')} />
            <SearchInput placeholder="Filter by Email" onChange={handleChange('email')} />
            <SearchInput placeholder="Filter by Phone" onChange={handleChange('phone')} />
        </SearchContainer>
    );
};
