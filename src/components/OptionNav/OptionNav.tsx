import React from "react";

export interface OptionNavProps {
  imgSrc: string;
  text: string;
}

const OptionNav = (props: OptionNavProps) => {

    let option = `
         <div class="option" tabindex="0">
            <div class="imagenOption">
                <img src="${props.imgSrc}" alt="Estrellita">
            </div>
            <p>${props.text}</p>
        </div>`;

    return option;
};

export default OptionNav;