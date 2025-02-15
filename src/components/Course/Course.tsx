import React from "react";

import "./Course.css"

export interface CourseProps{
    imageSrc: string;
    title: string;
    description: string;
}

const Course = (props:CourseProps)=>{
    return <div>
        <img src={props.imageSrc}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
}

export default Course