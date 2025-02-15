import React from "react";
import "./OptionNav.css";

export interface OptionNavProps {
  imgSrc: string;
  text: string;
}

const OptionNav = ({
  imgSrc = "https://images.vexels.com/media/users/3/134189/isolated/preview/b5ac9e439895b429ae3c44c368741aa5-silueta-estrella-16.png",
  text,
}: OptionNavProps) => {
  return (
    <div className="option">
      <div className="imagenOption">
        <img src={imgSrc} alt="Estrellita" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default OptionNav;
