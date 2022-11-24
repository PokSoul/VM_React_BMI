import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import allTheActions from '../../actions'
import styled from 'styled-components'
import { SunFill } from '@styled-icons/bootstrap/SunFill'
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill'
import { LineChart } from '@styled-icons/boxicons-regular/LineChart'
import Logo from '../../logo.svg'

const TopNavbar = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.value)
  const history = useNavigate()

  return (
    <ContainerTop>
      <Name onClick={() => history('/')}>
        <LogoImg src={Logo} alt={Logo} />
        <h3>{process.env.REACT_APP_NAME}</h3>
      </Name>
      <ButtonTheme
       onClick={() =>
        history('/chart')
      }>
        <LineChartIcon /> <span>Stats</span>
      </ButtonTheme> 
      <ButtonTheme
        onClick={() =>
          dispatch(
            allTheActions.theme.changeTheme(
              theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
            )
          )
        }
      >
        {theme === 'lightTheme' ? <MoonIcon /> : <SunIcon />}
      </ButtonTheme>
    </ContainerTop>
  )
}

const ContainerTop = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  top: 0;
  background: ${props => props.theme.navbarColor};
`
const LogoImg = styled.img`
  max-width: 15%;
  margin-right: 3%;
  border-radius: 10%;
`

// tags texts
const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  margin-left: 2%;
  color: ${props => props.theme.textColor};

`

const ButtonTheme = styled.button`
  width: 50px;
  background: none;
  color: ${props => props.theme.themeBtnColor};
  border: none;
`

// Icons
const MoonIcon = styled(MoonStarsFill)`
  max-width: 25px;
`
const SunIcon = styled(SunFill)`
  max-width: 25px;
`

const LineChartIcon = styled(LineChart)`
  max-width: 100%;
` 

export default TopNavbar
