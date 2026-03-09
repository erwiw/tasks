import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
<<<<<<< HEAD
    const [dieOne, setDieOne] = useState(1);
    const [dieTwo, setDieTwo] = useState(2);
    function setDieOneValue(num: number): void {
        setDieOne(num);
    }
    function setDieTwoValue(num: number): void {
        setDieTwo(num);
    }
    function rollDieOne(): void {
        setDieOneValue(d6());
    }
    function rollDieTwo(): void {
        setDieTwoValue(d6());
    }
    return (
        <div>
            Die One: <span data-testid="left-die">{dieOne}</span>
            Die Two: <span data-testid="right-die">{dieTwo}</span>
            <Button role="button" onClick={rollDieOne}>
                Roll Left
            </Button>
            <Button role="button" onClick={rollDieTwo}>
                Roll Right
            </Button>
            <div>{dieOne === dieTwo && dieOne === 1 && "You Lose!"}</div>
            <div>{dieOne === dieTwo && dieOne !== 1 && "You Win!"}</div>
        </div>
    );
=======
    return <div>Two Dice</div>;
>>>>>>> upstream/task-components
}
