import { SvgIconProps } from "@/entities/svgIcon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowDownIcon = (props: SvgIconProps) => {
  return (
    <Svg width={12} height={7} viewBox="0 0 12 7" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.293.293a1 1 0 011.414 0l3.844 3.844L9.396.293a1 1 0 011.414 1.414L6.259 6.26a1 1 0 01-1.415 0L.293 1.707a1 1 0 010-1.414z"
        fill={props?.fillColor || "#101010"}
      />
    </Svg>
  );
};

export default ArrowDownIcon;
