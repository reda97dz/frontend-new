import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { faBook, faBookReader, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'app/hooks';
import { selectSidebar } from 'app/sidebarSlice';
import { Container } from './Sidebar.style';
import Element from './Element';

const pages = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: faHome,
  },
  {
    title: 'Issue',
    path: '/issue',
    icon: faBookReader,
  },
  {
    title: 'Books',
    path: '/books',
    icon: faBook,
  },
  {
    title: 'Members',
    path: '/members',
    icon: faUsers,
  },
];

const Sidebar: FC = () => {
  const location = useLocation();
  const sidebar = useAppSelector(selectSidebar);
  return (
    <Container toggle={sidebar.toggled}>
      {pages.map((page) => (
        <NavLink to={page.path} key={page.path}>
          <Element
            title={page.title}
            path={page.path}
            location={location.pathname}
            icon={page.icon}
          />
        </NavLink>
      ))}
    </Container>
  );
};

export default Sidebar;
