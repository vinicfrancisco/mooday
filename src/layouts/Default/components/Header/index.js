import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/auth';

import { Menu } from './components';
import { Button } from '~/components';

import LogoImage from '~/assets/images/logo.png';
import Perfil from '~/assets/images/perfil.jpg';

import { Container, LinkLogo, Navigation, User, Logo } from './styles';

function Header(props) {
  const dispatch = useDispatch();

  const user = useSelector(state => state.users.logged.data);

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

        {user.id && (
          <User>
            <img src={Perfil} />
            <span>{user.username}</span>

            <Button color="error" onClick={() => handleLogout()}>
              Sair
            </Button>
          </User>
        )}
      </div>
    </Container>
  );
}

export default Header;
