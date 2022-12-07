import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const initialValues = {
  weight: '',
  height: '',
  date: '',
};

const FormIMC = ({ change }) => {
  const [state, setState] = useState(initialValues);

  const exceptThisSymbols = ['e', 'E', '+', '-', '.', ','];
  const handleChange = e => {
    let { value, name } = e.target;
    if (value > 999) {
      value = 999;
    }
    const date = new Date().toLocaleString().split(',')[0];
    setState({
      ...state,
      [name]: value,
      date,
    });
  };

  const handleSubmit = () => {
    change(state);
    setState(initialValues);
  };

  return (
    <div>
      <FormContainer>
        <FormTitle>Calculateur IMC</FormTitle>
        <StyledForm>
          <StyledInput
            id="weight"
            name="weight"
            type="number"
            min="1"
            max="999"
            value={state.weight}
            placeholder="Poids (en kg)"
            onKeyDown={e =>
              exceptThisSymbols.includes(e.key) && e.preventDefault()
            }
            onChange={handleChange}
          ></StyledInput>
          <StyledInput
            id="height"
            name="height"
            type="number"
            min="1"
            max="999"
            value={state.height}
            placeholder="Taille (en cm)"
            onKeyDown={e =>
              exceptThisSymbols.includes(e.key) && e.preventDefault()
            }
            onChange={handleChange}
          ></StyledInput>
          <StyledButton
            onClick={handleSubmit}
            disabled={state.weight === '' || state.height === ''}
          >
            Calculer IMC
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
  padding: 10px;
  background: ${props => props.theme.formContainerColor};
  box-sizing: border-box;
  box-shadow: 0 15px 25px ${props => props.theme.formContainerColor};
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin: 0 0 30px;
  padding: 0;
  color: ${props => props.theme.textFormColor};
  text-align: center;
`;

const StyledForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: #3f51b5;
  padding: 15px 50px;
  color: white;
  font-size: 16px;
  border-radius: 44px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.formContainerColor};
  margin-bottom: 40px;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.theme.textFormColor};
    transform: translate(0px, -2px);
    box-shadow: 0px 15px 30px -12px rgba(255, 255, 255, 0.2);
  }
  &:disabled {
    border: 1px solid ${props => props.theme.formContainerColor};
    background-color: ${props => props.theme.navbarColor};
    color: ${props => props.theme.textColor};
    cursor: default;
  }
  &:disabled&:hover {
    box-shadow: none;
    transform: translate(0, 0);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${props => props.theme.textFormColor};
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.textFormColor};
  outline: none;
  background: transparent;
  &::placeholder {
    color: ${props => props.theme.textFormColor};
  }
`;

FormIMC.propTypes = {
  change: PropTypes.func.isRequired,
};

export default FormIMC;
