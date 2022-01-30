import { FC } from 'react';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';
import { MainContent } from './Layout.style';

const Layout: FC = (props) => {
  const { children } = props;
  return (
    <>
      <Sidebar />
      <Topbar />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;
