import React, { useState } from 'react';
import { HeaderContainer, Elements, UserAvatar, Logo } from './Header.style';
import Avatar from '../../assets/UserAvatar.png';
import LogoImage from '../../assets/TodoLogo.svg';
import LogoTitle from '../../assets/TodoLogoTitle.svg';
import SettingsModal from '../../components/SettingsModal';

const Header = () => {
  const [isSettingsModal, setIsSettingsModal] = useState(false);

  const settingsModalHandler = () =>
    setIsSettingsModal(prevState => !prevState);

  return (
    <HeaderContainer className='header'>
      <Elements>
        <Logo>
          <img src={LogoImage} alt='logoImage' />
          <img src={LogoTitle} alt='title' />
        </Logo>
        <UserAvatar onClick={settingsModalHandler}>
          <span>Username</span>
          <img src={Avatar} alt='userAvatar' />
          {isSettingsModal && (
            <SettingsModal
              isSettingsModal={isSettingsModal}
              userAvatar={Avatar}
            />
          )}
        </UserAvatar>
      </Elements>
    </HeaderContainer>
  );
};

export default Header;