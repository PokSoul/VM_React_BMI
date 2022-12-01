import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cards = ({ weight, height, id, date, bmi, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };
  return (
    <div>
      <Wrapper>
        <DeleteButton onClick={handleDelete}>X</DeleteButton>
        <StyledTitle>BMI: {bmi}</StyledTitle>
        <WrapperSpan>
          <DataSpan data-test="weight">Weight: {weight} kg </DataSpan>
          <DataSpan data-test="height">Height: {height} cm </DataSpan>
          <DataSpan data-test="date">Date: {date} </DataSpan>
        </WrapperSpan>
      </Wrapper>
    </div>
  );
};

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.textFormColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* Properties used for this pen specifically */
  background-color: ${props => props.theme.formContainerColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;
  margin: 20px;
`;

const WrapperSpan = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DataSpan = styled.span`
  color: ${props => props.theme.textFormColor};
  text-align-last: center;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  font-weight: 700;
  padding: 5px 9px;
  cursor: pointer;
  right: 17px;
  top: 12px;
`;

Cards.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func,
};

export default Cards;
