import { FC, useState } from 'react';
// import PersonIcon from 'assets/svgs/Person_Icon.svg';
import ClickAwayListener from 'react-click-away-listener';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Container, Menu, MenuContainer, MenuItem } from './Profile.style';

const MenuItems = ['My Profile', 'Settings', 'Logout'];

const Profile: FC<{ name: string }> = (props) => {
  const { name } = props;
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <MenuContainer>
      <Container onClick={toggleOpen}>
        <p> {name} </p>
        <FontAwesomeIcon icon={faUserCircle} color="#001b2e" size="2x" />
      </Container>
      {open && (
        <ClickAwayListener onClickAway={toggleOpen}>
          <Menu>
            {MenuItems.map((item) => (
              <MenuItem>{item}</MenuItem>
            ))}
          </Menu>
        </ClickAwayListener>
      )}
    </MenuContainer>
  );
};

export default Profile;
