import React, {  useState }  from 'react';
import styled from 'styled-components'

const FormIMC = () => {

    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
      let val = (
        [Number(weight) / Number(height) / Number(height)] * 10000
      ).toFixed(1);
      setBmi(val);
      if (val < 18.5) {
        setInfo("Under Weight");
      } else if (val > 18.5 && val <= 24.9) {
        setInfo("Healthy");
      } else if (val > 24.9 && val < 30) {
        setInfo("Overweight");
      } else {
        setInfo("Obese");
      }
    };

    return (
        <div>
            <Container>
            <h1>IMC Form</h1>
                    <input
                    type="number"
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="height in cm"
                  />
                  <input
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Weight in kg"
                  />
                  <button onClick={handleBmi}>Calculer</button>
                  <h1>{bmi}</h1>
                  <h2>{info}</h2>
            </Container>
        </div>
    );
};

const Container = styled.div`
    display: flex;
    background-color: blue;
    align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default FormIMC;