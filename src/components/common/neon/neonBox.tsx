import styled, { css } from 'styled-components';
import { SizeType } from './neonComponent';

type NeonCompProps = {
  $isState: boolean;
  $color: string;
  $styles: SizeType;
};

export const NeonBoxStyle = styled.div<NeonCompProps>`
$thisColor : ${(props) => props.$color}
  ${(props) => props.$styles}
  border: 3px solid #f0f0f070;
  border-radius: 10px;
  padding: 10px;
  transition: border 0.5s ease-out, box-shadow 0.5s ease-out, opacity 0.5s ease-out;
  color: #fff;
  opacity: 0.5;
  box-sizing: border-box;

  ${({ $isState, $color }) =>
    $isState &&
    css`
      border: 3px solid ${$color};
      box-shadow: 0 0 0.1rem ${$color}, 0 0 0.1rem ${$color}, 0 0 1rem ${$color},
        0 0 0.3rem ${$color}, 0 0 0.3rem ${$color}, inset 0 0 0.3rem ${$color};
      opacity: 0.3;
    `}

  &:hover {
    border: 3px solid $thisColor;
    box-shadow: 0 0 0.1rem $thisColor,
      0 0 0.1rem $thisColor, 0 0 1rem $thisColor,
      0 0 0.4rem $thisColor,
      0 0 1.4rem $thisColor,
      inset 0 0 0.8rem $thisColor;
    opacity: 1;
  }
`;
