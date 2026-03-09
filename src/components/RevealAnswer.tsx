import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
<<<<<<< HEAD
    const [revealed, setRevealed] = useState(false);
    function flipRevealed(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button role="button" onClick={flipRevealed}>
                /Reveal Answer/i
            </Button>
            {revealed && <div>42</div>}
        </div>
    );
=======
    return <div>Reveal Answer</div>;
>>>>>>> upstream/task-components
}
