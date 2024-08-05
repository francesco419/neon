import { NeonBoxStyle } from './neonBox.tsx';
import { ReactNode, useState } from 'react';
import { neonColor } from '@context/theme.tsx';

export type SizeType = {
  width: string;
  height: string;
};

type NeonComponentProps = {
  children: ReactNode;
  neonSize?: SizeType;
  color?: string;
};

export default function NeonComponent({
  children,
  neonSize = {
    width: 'auto',
    height: 'auto'
  },
  color = neonColor.yellow
}: NeonComponentProps) {
  const [onceHover, setOnceHover] = useState<boolean>(false);

  const hoverHandler = () => {
    setOnceHover(true);
  };

  return (
    <>
      <NeonBoxStyle
        onMouseEnter={hoverHandler}
        state={onceHover}
        color={color}
        styles={neonSize}
      >
        {children}
      </NeonBoxStyle>
    </>
  );
}
