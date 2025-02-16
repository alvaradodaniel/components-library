import React from "react";
import "./Filter.css";

export interface FilterProps {
  label: string;
  isActive?: boolean;
}

const Filter = ({ label, isActive = false }: FilterProps) => {
  const buttonClasses = `filter-button ${
    isActive ? "filter-button-active" : ""
  }`;

  return (
    <button className={buttonClasses}>
      {isActive && "✔"} {label}
    </button>
  );
};

export default Filter;
