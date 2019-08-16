import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { Menu } from './components';
import { Button } from '~/components';

import LogoImage from '~/assets/images/logo.png';

import { Container, LinkLogo, Navigation, User, Logo } from './styles';

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.logged);

  function handleLogout() {
    dispatch(AuthActions.logoutRequest());
  }

  return (
    <Container {...props}>
      <div>
        <LinkLogo to="/">
          <Logo src={LogoImage} />
        </LinkLogo>

        <Navigation>
          <Menu {...props} />
        </Navigation>

        <User>
          <img src={LogoImage} />
          <span>Vini</span>

          <Button color="error" onClick={() => handleLogout()}>
            Sair
          </Button>
        </User>
      </div>
    </Container>
  );
}

export default Header;
