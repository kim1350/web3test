import { SvgIconProps } from "@/entities/svgIcon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WalletIcon = (props: SvgIconProps) => {
  return (
    <Svg width={25} height={21} viewBox="0 0 25 21" fill="none" {...props}>
      <Path
        d="M16.666 0a6.667 6.667 0 016.667 6.666v6.667A6.667 6.667 0 0116.666 20h-10A6.667 6.667 0 010 13.333V6.666A6.667 6.667 0 016.666 0h10zm-10 1.666c-2.76 0-5 2.24-5 5v6.667a5 5 0 005 5h10a5 5 0 004.93-4.166h-4.43a4.167 4.167 0 010-8.333h4.43a5 5 0 00-4.93-4.168h-10zm10.5 5.834a2.5 2.5 0 000 5h4.5v-5h-4.5z"
        fill={props?.fillColor || "#101010"}
      />
    </Svg>
  );
};

export default WalletIcon;
