import React from "react";
import "./Lection.css";

export interface LectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  onClick?: () => void;
}

const Lection = ({
  title,
  description,
  imageSrc = "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
}: LectionProps) => {
  return (
    <div className="lection-container">
      <div>
        <img src={imageSrc} alt="Lection image" className="lection-image"></img>
      </div>
      <div className="lection-texts">
        <h1 className="lection-title">{title}</h1>
        <p className="lection-paragraph">{description}</p>
      </div>
    </div>
  );
};

const LectionWrapper = (props: LectionProps) => {
  return <Lection {...props} />;
};

export default LectionWrapper;
