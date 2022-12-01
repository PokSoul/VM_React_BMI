import React from 'react';
import LoaderGif from '../../assets/pong.gif';
import styled from 'styled-components';

const Loader = () => {
  return (
    <div>
      <ContainerGif>
        <ImgGif src={LoaderGif} />
      </ContainerGif>
    </div>
  );
};

const ContainerGif = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgGif = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Loader;
