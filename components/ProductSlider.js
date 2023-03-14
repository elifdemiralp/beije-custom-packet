import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    color: "gray",
  },
  thumb: {
    backgroundColor: "black",
    height: 15,
    width: 15,
    marginLeft: -7,
    marginTop: -7,

    "&:focus, &:hover, &$active": {
      boxShadow: " 0px 0px 0px 8px rgba(0, 0, 0, 0.16)",
    },
  },
  active: {},
  track: {
    color: "#343131",
    opacity: 1,
    height: 4,
  },
  rail: {
    color: "#343131",
    opacity: 0.5,
    height: 4,
  },
  valueLabel: {
    left: "calc(-50% - 1px)",
  },
  mark: {
    backgroundColor: "#343131",
    height: 4,
    width: 1,
    opacity: 0.8,
  },
  markActive: {
    opacity: 0.8,
    backgroundColor: "white",
  },
});

const ProductSlider = ({ productName, value, min, max, step, onChange }) => {
  const classes = useStyles();

  return (
    <div className="mt-6">
      <label className="block text-gray-700 font-normal mb-8" htmlFor="slider">
        {productName}
      </label>
      <div className="">
        <Slider
          classes={{
            root: classes.root,
            thumb: classes.thumb,
            active: classes.active,
            track: classes.track,
            rail: classes.rail,
            valueLabel: classes.valueLabel,
            mark: classes.mark,
            markActive: classes.markActive,
          }}
          max={max}
          min={min}
          step={step}
          marks={true}
          value={value}
          onChange={onChange}
          valueLabelDisplay="auto"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">{min}</span>
        <span className="text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default ProductSlider;
