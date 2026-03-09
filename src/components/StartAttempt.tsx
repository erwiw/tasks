import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
<<<<<<< HEAD
    const [numAttempts, setAttempts] = useState(4);
    const [inProgress, setProgress] = useState(false);
    function modifyAttempt(num: number): void {
        setAttempts(numAttempts + num);
    }
    function flipProgress(): void {
        setProgress(!inProgress);
    }
    function onClickStart(): void {
        flipProgress();
        modifyAttempt(-1);
    }
    function onClickStop(): void {
        if (inProgress) flipProgress();
    }
    function onClickMulligan(): void {
        if (!inProgress) modifyAttempt(1);
    }
    return (
        <div>
            <Button
                role="button"
                onClick={onClickStart}
                disabled={inProgress || numAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button role="button" onClick={onClickStop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                role="button"
                onClick={onClickMulligan}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>Number of Attempts: {numAttempts}</div>
        </div>
    );
=======
    return <div>Start Attempt</div>;
>>>>>>> upstream/task-components
}
