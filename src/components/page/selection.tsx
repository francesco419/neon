import styled from 'styled-components';
import NeonComponent from '../common/neon/neonComponent.tsx';
import { TestComp } from '../common/testComponent.tsx';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const FlexBox = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  background-color: #000;
  gap: 100px;
  justify-content: center;
`;

export default function Selection() {
  return (
    <Container>
      <FlexBox>
        <NeonComponent>
          <p>first</p>
        </NeonComponent>
        <NeonComponent>
          <p>second</p>
        </NeonComponent>
      </FlexBox>
    </Container>
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
