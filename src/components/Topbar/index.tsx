import { FC } from 'react';
import { Container, Title, Toggle } from './Topbar.style';
import Profile from './Profile';

const Sidebar: FC = () => (
  <Container>
    <Toggle />
    <Title>Library Management System</Title>
    <Profile name="Admin" />
  </Container>
);

export default Sidebar;
