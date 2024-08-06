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
  color = 'yellow'
}: NeonComponentProps) {
  const [onceHover, setOnceHover] = useState<boolean>(false);

  const hoverHandler = () => {
    setOnceHover(true);
  };

  const isThemeExist = (): string => {
    let themeColor: string = '#ffe204';

    neonColor.forEach((a) => {
      if (a.name === color) {
        themeColor = a.color;
      }
    });

    return themeColor;
  };

  return (
    <>
      <NeonBoxStyle
        onMouseEnter={hoverHandler}
        $isState={onceHover}
        $color={isThemeExist()}
        $styles={neonSize}
      >
        {children}
      </NeonBoxStyle>
    </>
  );
}
