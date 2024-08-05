import styled from 'styled-components';
import NeonComponent from '../../common/neon/neonComponent.tsx';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 1280px;
  margin: 0 auto;
  background-color: #000;

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export default function SelectPage() {
  return (
    <>
      <Container>
        <FlexBox>
          <NeonComponent>
            <p>1</p>
          </NeonComponent>
          <NeonComponent>
            <p>2</p>
          </NeonComponent>
          <NeonComponent>
            <p>3</p>
          </NeonComponent>
          <NeonComponent>
            <p>4</p>
          </NeonComponent>
          <NeonComponent>
            <p>5</p>
          </NeonComponent>
          <NeonComponent>
            <p>6</p>
          </NeonComponent>
          <NeonComponent>
            <p>7</p>
          </NeonComponent>
        </FlexBox>
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
