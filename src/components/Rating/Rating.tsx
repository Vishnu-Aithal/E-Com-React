import { useState } from "react";
import { DisplayStar } from "./DisplayStar";
import { InputStar } from "./InputStar";
type RatingProps =
    | {
          type: "input";
          value?: undefined;
      }
    | {
          type: "display";
          value: number;
      };
export const Rating: React.FC<RatingProps> = ({ type, value }) => {
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
