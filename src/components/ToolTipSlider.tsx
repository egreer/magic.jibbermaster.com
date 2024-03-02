import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { TooltipProps } from "rc-tooltip/lib/Tooltip";
import React from "react";

const ToolTipSlider = ({
  tipProps,
  ...props
}: SliderProps & { tipProps?: TooltipProps }) => (
  <Slider
    className="mb-4"
    handleRender={(node, handleProps) => {
      return (
        <Tooltip
          visible={handleProps.dragging}
          overlayInnerStyle={{ minHeight: "auto" }}
          overlay={`${handleProps.value} %`}
          placement="top"
          {...tipProps}
        >
          {node}
        </Tooltip>
      );
    }}
    {...props}
  ></Slider>
);

export default ToolTipSlider;
