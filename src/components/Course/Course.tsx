import React from "react";
import "./Course.css";

export interface CourseProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Course = ({
  imageSrc = "https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png",
  title,
  description,
}: CourseProps) => {
  return (
    <div className="course-container">
      <img alt="Course image" src={imageSrc} className="course-image" />
      <h1 className="course-title">{title}</h1>
      <p className="course-description">{description}</p>
    </div>
  );
};

export default Course;
