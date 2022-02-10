import { FC } from 'react';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import { useAppDispatch } from 'app/hooks';
import { toggleSidebarValue } from 'app/sidebarSlice';
import { MainContent } from './Layout.style';

const Layout: FC = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();
  return (
    <>
      <Sidebar />
      <Topbar />
      <MainContent onClick={() => dispatch(toggleSidebarValue(false))}>{children}</MainContent>
    </>
  );
};

export default Layout;
