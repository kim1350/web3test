import { SvgIconProps } from "@/entities/svgIcon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckIcon = (props: SvgIconProps) => {
  return (
    <Svg width={11} height={9} viewBox="0 0 11 9" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75.24c.334.32.334.84 0 1.161L5.156 8.76a.883.883 0 01-1.21 0L.25 5.218a.797.797 0 010-1.16.883.883 0 011.211 0l3.09 2.96L9.538.24a.883.883 0 011.211 0z"
        fill={props.fillColor || "#101010"}
      />
    </Svg>
  );
};

export default CheckIcon;
