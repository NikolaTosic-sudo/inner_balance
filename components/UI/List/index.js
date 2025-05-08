'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CustomUnorganizedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: block;
  }
`;

const CustomListItem = styled.li`
  display: flex;
  width: 50%;
  align-items: center;
  padding: 14px 18px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #eee;
  transition: background 0.3s ease;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #f5f5f5;
    cursor: pointer;
  }
  &::before {
    content: '✔';
    font-size: 18px;
    color: #656dba;
    margin-right: 12px;
  }
  &:hover::before {
    color: #ff9800;
    transform: scale(1.2);
    transition:
      color 0.3s ease,
      transform 0.3s ease;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomList = ({ data }) => {
  const { t } = useTranslation('common');

  return (
    <CustomUnorganizedList>
      {data?.map((item, index) => (
        <CustomListItem key={index}>{t(item)}</CustomListItem>
      ))}
    </CustomUnorganizedList>
  );
};

export default CustomList;
