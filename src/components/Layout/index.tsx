import { FC } from 'react';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectSidebar, toggleSidebarValue } from 'app/sidebarSlice';
import { MainContent } from './Layout.style';

const Layout: FC = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector(selectSidebar);
  return (
    <>
      <Sidebar />
      <Topbar />
      <MainContent onClick={() => sidebar.toggled && dispatch(toggleSidebarValue(false))}>
        {children}
      </MainContent>
    </>
  );
};

export default Layout;
