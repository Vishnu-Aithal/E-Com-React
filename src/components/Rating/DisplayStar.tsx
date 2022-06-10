export const DisplayStar: React.FC<{ type?: "filled" }> = ({ type }) => {
    return (
        <input
            type="radio"
            className={`rating__star ${
                type === "filled" ? "rating__star--filled" : ""
            }`}
            disabled></input>
    );
};
