import React from "react";

interface BadgeProps {
    type: "count" | "status";
    count: number;
    position?: "top-left" | "bottom-left" | "bottom-right" | "top-right";
    shape?: "square" | "pill" | "round";
    color?:
        | "white"
        | "black"
        | "primary"
        | "primary-light"
        | "primary-dark"
        | "secondary"
        | "secondary-dark"
        | "secondary-light"
        | "red"
        | "blue"
        | "yellow"
        | "green"
        | "light-gray"
        | "off-white";
}
export const Badge: React.FC<BadgeProps> = ({
    type,
    count,
    position,
    shape,
    color = "secondary",
}) => {
    const positions = {
        "top-left": "badge--top-left",
        "bottom-left": "badge--bottom-left",
        "bottom-right": "badge--bottom-right",
        "top-right": "",
    };
    const shapes = {
        square: "br-1",
        pill: "br-4",
        round: "br-r",
    };
    const types = {
        count: "badge--count",
        status: "badge--status",
    };
    return (
        <span
            className={`badge ${types[type] ?? "badge--count"} ${
                position ? positions[position] : ""
            } ${shape ? shapes[shape] : "br-4"} bg-${color}`}
            data-count={count}></span>
    );
};
