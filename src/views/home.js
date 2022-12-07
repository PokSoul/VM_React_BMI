import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import FormImc from '../components/imcform/form';
import ChartGauge from '../components/chart/gauge';
import { v4 as uuidv4 } from 'uuid';
import { getData, storeData } from '../config/localStorage';

const Home = () => {
  const initialState = () => getData('data') || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState('');

  useEffect(() => {
    storeData('data', state);
    const bmi = state.map(obj => obj.bmi);
    let newData = bmi;
    setData(newData);
  }, [state]);

  const handleChange = val => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    val.id = uuidv4();
    let newVal = [...state, val];
    let len = newVal.length;
    if (len > 7) newVal = newVal.slice(1, len);
    setState(newVal);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <FormImc change={handleChange} />
        <ChartGauge bmiData={data.slice(-1)} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 2%;
`;

export default Home;
