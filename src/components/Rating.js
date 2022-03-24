import { useState } from "react";

const DisplayStar = ({ type }) => {
    return (
        <input
            type="radio"
            className={`rating__star ${
                type === "filled" ? "rating__star--filled" : ""
            }`}
            disabled></input>
    );
};

const InputStar = ({ checkSetter, hoverSetter }) => {
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

export const Rating = ({ type, value }) => {
    if (type === "input") {
        const [checked, setChecked] = useState(false);
        const [hover, setHover] = useState(false);
        return (
            <div
                className={`rating rating--input bg-off-white br-2 p-1 ${
                    checked ? "rating--checked" : ""
                } ${hover ? "rating--hover" : ""}`}>
                {[...Array(5)].map((_, index) => (
                    <InputStar
                        key={index}
                        checkSetter={setChecked}
                        hoverSetter={setHover}
                    />
                ))}
            </div>
        );
    } else {
        return (
            <div className="rating rating--display bg-off-white br-2 p-1">
                {[...Array(5)].map((_, index) =>
                    index < value ? (
                        <DisplayStar key={index} type={"filled"} />
                    ) : (
                        <DisplayStar key={index} />
                    )
                )}
            </div>
        );
    }
};
