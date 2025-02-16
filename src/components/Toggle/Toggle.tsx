import React, { useState } from "react";
import "./Toggle.css";

export interface ToggleProps {
  options: [string, string];
  defaultSelected?: number;
  onChange?: (selectedIndex: number) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  options,
  defaultSelected = 0,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleClick = (index: number) => {
    setSelected(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className="toggle-container">
      {options.map((option, index) => (
        <div
          key={index}
          className={`toggle-option ${selected === index ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Toggle;
