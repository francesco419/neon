import styled from 'styled-components';
import { NeonBoxStyle } from '../common/neonBox';

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
`;

export default function Selection() {
  return (
    <Container>
      <FlexBox>
        <NeonBoxStyle>color</NeonBoxStyle>
      </FlexBox>
    </Container>
  );
}
