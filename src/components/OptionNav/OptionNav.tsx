import React from "react";
import "./OptionNav.css";

export interface OptionNavProps {
  text: string;
  imageSrc?: string;
}

const OptionNav = ({
  text,
  imageSrc = "https://images.vexels.com/media/users/3/134189/isolated/preview/b5ac9e439895b429ae3c44c368741aa5-silueta-estrella-16.png",
}: OptionNavProps) => {
  return (
    <div className="option">
      <div className="imagenOption">
        <img src={imageSrc} alt="Estrellita" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default OptionNav;
