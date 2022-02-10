import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectSidebar, toggleSidebar } from 'app/sidebarSlice';
import { Container, Title, Toggle } from './Topbar.style';
import Profile from './Profile';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector(selectSidebar);
  return (
    <Container>
      <Toggle onClick={() => dispatch(toggleSidebar())} />
      <Title>Library Management System</Title>
      <Profile name="Admin" />
    </Container>
  );
};

export default Sidebar;
