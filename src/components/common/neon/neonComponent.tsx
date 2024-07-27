import { NeonBoxStyle } from './neonBox.tsx';
import { ReactNode, useState } from 'react';
import { neonColor } from '@context/theme.tsx';

type NeonComponentProps = {
  children: ReactNode;
};

export default function NeonComponent({ children }: NeonComponentProps) {
  const [onceHover, setOnceHover] = useState<boolean>(false);

  const hoverHandler = () => {
    setOnceHover(true);
  };
  return (
    <>
      <NeonBoxStyle
        onMouseEnter={hoverHandler}
        state={onceHover}
        color={neonColor.yellow}
      >
        {children}
      </NeonBoxStyle>
    </>
  );
}
