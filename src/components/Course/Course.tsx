import React from "react";
import "./Course.css";

export interface CourseProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const Course = ({
  title,
  description,
  imageSrc = "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
}: CourseProps) => {
  return (
    <div className="course-container">
      <img alt="Course image" src={imageSrc} className="course-image"></img>
      <h1 className="course-title">{title}</h1>
      <p className="course-description">{description}</p>
    </div>
  );
};

export default Course;
