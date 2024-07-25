import styled from 'styled-components';

export const NeonBoxStyle = styled.div`
  width: 500px;
  height: 500px;
  border: 3px solid #f0f0f020;
  border-radius: 10px;
  margin: 100px 0;
  transition: border 1.5s, box-shadow 1s, opacity 1s;
  color: #fff;
  opacity: 0.5;
  padding: 20px;
  box-sizing: border-box;

  &:hover {
    border: 3px solid #00cb8d;
    opacity: 1;
    box-shadow: #00cb8d 0px 0px 10px 1px, inset #00cb8d 0px 0px 10px 1px;
  }
`;
