import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, changeColor] = useState("red");
    const COLORS = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet",
        "Black",
        "Grey",
    ];

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    role="radio"
                    inline
                    value={color}
                    name="response"
                    onChange={(event) => {
                        changeColor(event.target.value);
                    }}
                    id={"response-" + color}
                    label={color}
                    style={{ backgroundColor: color }}
                    checked={chosenColor === color}
                />
            ))}

            <div>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </div>
            </div>
        </div>
    );
}
