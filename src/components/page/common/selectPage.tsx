import styled from 'styled-components';
import NeonComponent from '../../common/neon/neonComponent.tsx';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px 0;
  background-color: #000;
  box-sizing: border-box;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #000;
  gap: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  background-color: #000;
  gap: 100px;
  justify-content: center;
`;

const GridInnerBox = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export default function SelectPage() {
  return (
    <>
      <Container>
        <GridBox>
          <GridInnerBox>
            <NeonComponent
              neonSize={{ width: 'auto', height: '200px' }}
              color='blue1'
            >
              <p>1</p>
            </NeonComponent>
          </GridInnerBox>
        </GridBox>
      </Container>
    </>
  );
}

/*
 border: 0.2rem solid #fff;
border-radius: 2rem;
padding: 0.4em;
box-shadow: 0 0 .2rem #fff,
          0 0 .2rem #fff,
          0 0 2rem #bc13fe,
          0 0 0.8rem #bc13fe,
          0 0 2.8rem #bc13fe,
          inset 0 0 1.3rem #bc13fe;  
          */

/**
           * const FlexBox = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  background-color: #000;
  gap: 100px;
  justify-content: center;
`;
           */
