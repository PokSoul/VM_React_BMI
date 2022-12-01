import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import ChartLine from '../components/chart/line';
import Loader from '../components/loader/loader';
import { getData } from '../config/localStorage';
import InfoCard from '../components/cards';
import styled from 'styled-components';
import MovingText from 'react-moving-text';

const Chart = () => {
  const [state, setState] = useState(getData('data'));
  const [data, setData] = useState({});

  const handleDelete = id => {
    let newState = state.filter(i => {
      return i.id !== id;
    });
    console.log(newState);
    setState(newState);
  };

  useEffect(() => {
    const date = state.map(obj => obj.date);
    const bmi = state.map(obj => obj.bmi);
    const weight = state.map(obj => obj.weight);
    let newData = { date, bmi, weight };
    setData(newData);
  }, [state]);

  return (
    <div>
      <Navbar />
      {state.length > 0 ? (
        <>
          <ChartContainer>
            <ChartLine
              bmiData={data.bmi}
              labelData={data.date}
              weightData={data.weight}
            />
          </ChartContainer>
          <ContainerCard>
            {state.map(info => (
              <InfoCard
                key={info.id}
                id={info.id}
                weight={info.weight}
                height={info.height}
                date={info.date}
                bmi={info.bmi}
                deleteCard={handleDelete}
              />
            ))}
          </ContainerCard>
        </>
      ) : (
        <Container>
          <Loader />
          <MovingText
            type="flip"
            duration="1000ms"
            delay="0s"
            direction="alternate"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="none"
          >
            <TextMoved>Pas de données</TextMoved>
          </MovingText>
          ;
        </Container>
      )}
    </div>
  );
};

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Properties used for this pen specifically */
  position: relative;
  border-style: solid;
  border-radius: 8px;
  color: ${props => props.theme.formContainerColor};
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextMoved = styled.h1`
  text-decoration: wavy;
`;

const ChartContainer = styled.div`
  margin: 2%;
`;

export default Chart;
