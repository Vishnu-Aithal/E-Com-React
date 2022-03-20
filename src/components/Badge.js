export const Badge = ({ type, count, position, shape, color }) => {
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
    const colors = [
        "white",
        "black",
        "primary",
        "primary-light",
        "primary-dark",
        "secondary",
        "secondary-dark",
        "secondary-light",
        "red",
        "blue",
        "yellow",
        "green",
        "light-gray",
        "off-white",
    ];
    return (
        <span
            className={`badge ${types[type] ?? "badge--count"} ${
                positions[position] ?? ""
            } ${shapes[shape] ?? "br-4"} bg-${
                colors.includes(color) ? color : "secondary"
            }`}
            data-count={count}></span>
    );
};
