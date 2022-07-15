import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const MyInput: React.FC<Props> = (props) => {
    return (
        <div className="input">
            <input
                {...props}
                className="input__field"
                placeholder={props.label}
            />
            <label className="input__float-label" htmlFor="name">
                {props.label}
            </label>
            <span className="input__required-text"></span>
        </div>
    );
};
