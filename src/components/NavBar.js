import {
  IoCashOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoStatsChartOutline,
} from 'react-icons/io5';
import styled from 'styled-components';
import LOGO from '../assets/logo.png';
import { NAVBAR_BUTTON_DIM, NAVBAR_WIDTH, THEME_COLOR_2 } from '../config';
import NavButton from './NavButton';

const logoWidth = '2.8em';

const Wrapper = styled.div`
  width: ${NAVBAR_WIDTH};
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${THEME_COLOR_2};
  margin-bottom: 4em;
`;

const TitleLogo = styled.img`
  width: ${logoWidth};
  height: ${logoWidth};
  border-radius: 50%;
  margin-bottom: 0.5em;
`;

const Title = styled.h1`
  font-size: 1.6em;
`;

const ButtonWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleLogo src={LOGO} alt="logo" />
        <Title>W4R</Title>
      </TitleWrapper>
      <ButtonWrappers>
        <NavButton
          to="/dashboard"
          text="Dashboard"
          icon={<IoStatsChartOutline size={NAVBAR_BUTTON_DIM} />}
        ></NavButton>
        <NavButton
          to="/pledge"
          text="Pledge"
          icon={<IoCashOutline size={NAVBAR_BUTTON_DIM} />}
        ></NavButton>
        <NavButton
          to="/products"
          text="Products"
          icon={<IoShirtOutline size={NAVBAR_BUTTON_DIM} />}
        ></NavButton>
        <NavButton
          to="/runner"
          text="Runner"
          icon={<IoPersonOutline size={NAVBAR_BUTTON_DIM} />}
        ></NavButton>
      </ButtonWrappers>
    </Wrapper>
  );
};

export default NavBar;
