import { SvgIconProps } from "@/entities/svgIcon";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CopyIcon = (props: SvgIconProps) => {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        d="M2 1.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2a.5.5 0 01.5-.5zM9 0H2a2 2 0 00-2 2v7a2 2 0 002 2h7a2 2 0 002-2V2a2 2 0 00-2-2zm3 5.5h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-1H4v1a2 2 0 002 2h7a2 2 0 002-2V6a2 2 0 00-2-2h-1v1.5z"
        fill={props?.fillColor || "#101010"}
      />
    </Svg>
  );
};

export default CopyIcon;
