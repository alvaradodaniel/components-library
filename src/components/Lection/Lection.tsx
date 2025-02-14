import React from "react";

export interface LectionProps {
  label: string;
}

const Lection = (props: LectionProps) => {
  return <button>{props.label}</button>;
};

export default Lection;
