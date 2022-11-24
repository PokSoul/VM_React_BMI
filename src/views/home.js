import React from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import FormImc from '../components/imcform'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <FormImc />
                  
            </Container>
        </div>
    );
};

const Container = styled.div`
  display: flex;
`

export default Home;