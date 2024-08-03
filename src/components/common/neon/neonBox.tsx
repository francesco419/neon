import styled, { css } from 'styled-components';
import { SizeType } from './neonComponent';

type NeonCompProps = {
  state: boolean;
  color: string;
  styles: SizeType;
};

export const NeonBoxStyle = styled.div<NeonCompProps>`
  ${(props) => props.styles}
  border: 3px solid #f0f0f070;
  border-radius: 10px;
  padding: 20px;
  margin: 100px 0;
  transition: border 0.5s, box-shadow 0.5s, opacity 0.5s;
  color: #fff;
  opacity: 0.5;
  box-sizing: border-box;

  ${({ state, color }) =>
    state &&
    css`
      border: 3px solid ${color};
      box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem ${color},
        0 0 0.5rem ${color}, 0 0 0.5rem ${color}, inset 0 0 0.5rem ${color};
      opacity: 0.3;
    `}

  &:hover {
    border: 3px solid ${(props) => props.color};
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff,
      0 0 2rem ${(props) => props.color}, 0 0 0.8rem ${(props) => props.color},
      0 0 2.8rem ${(props) => props.color},
      inset 0 0 1.3rem ${(props) => props.color};
    opacity: 1;
  }
`;
