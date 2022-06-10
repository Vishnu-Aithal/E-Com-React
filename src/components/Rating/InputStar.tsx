import React from "react";

export const InputStar: React.FC<{
    checkSetter: React.Dispatch<React.SetStateAction<boolean>>;
    hoverSetter: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ checkSetter, hoverSetter }) => {
    return (
        <input
            type="radio"
            className="rating__star"
            name="rating"
            value="1"
            onClick={() => checkSetter(true)}
            onMouseEnter={() => hoverSetter(true)}
            onMouseLeave={() => hoverSetter(false)}></input>
    );
};
