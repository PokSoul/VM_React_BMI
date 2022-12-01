/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allTheActions from '../../actions';
import styled from 'styled-components';
import { SunFill } from '@styled-icons/bootstrap/SunFill';
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill';

const Header = props => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.value);

  return (
    <Container>
      <Name>{props.title}</Name>
      <Button
        onClick={() =>
          dispatch(
            allTheActions.theme.changeTheme(
              theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
            )
          )
        }
      >
        {theme === 'lightTheme' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Name = styled.h1`
  position: absolute;
  left: 0;
  margin-left: 2%;
  color: ${props => props.theme.textColor};
`;
const Button = styled.button`
  width: 50px;
  background: none;
  color: ${props => props.theme.themeBtnColor};
  border: none;
  position: relative;
`;
// Icons
const MoonIcon = styled(MoonStarsFill)`
  max-width: 25px;
`;
const SunIcon = styled(SunFill)`
  max-width: 25px;
`;

export default Header;
