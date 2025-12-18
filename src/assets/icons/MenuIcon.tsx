import { SvgIconProps } from "@/entities/svgIcon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = (props: SvgIconProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10 8.222a1.778 1.778 0 100 3.556 1.778 1.778 0 000-3.556zm-6.222 0a1.778 1.778 0 100 3.556 1.778 1.778 0 000-3.556zm12.444 0a1.778 1.778 0 100 3.556 1.778 1.778 0 000-3.556z"
        fill={props.fillColor || "#101010"}
      />
    </Svg>
  );
};

export default MenuIcon;
