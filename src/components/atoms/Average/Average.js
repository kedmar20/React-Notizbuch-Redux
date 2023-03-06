import React from "react";
import { AverageStyle } from "./Average.styles";

export let averageColor;

export const Average2 = (props) => (
  <AverageStyle>{(averageColor = props.marian)}</AverageStyle>
);
