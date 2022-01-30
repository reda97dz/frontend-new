import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  faBook,
  faBookReader,
  faHome,
  faUsers,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';
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
  }
];

const Sidebar: FC = () => {
  const location = useLocation();
  return (
    <Container>
      {pages.map((page) => (
        <NavLink to={page.path}>
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
