import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [requested, setRequested] = useState(0);

    function makeAttempt(): void {
        setAttempts(attempts - 1);
    }

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>): void {
        let intRequested = parseInt(event.target.value);
        if (intRequested > 0) {
            setRequested(intRequested);
        }
    }

    function gainAttempts(): void {
        setAttempts(attempts + requested);
    }

    return (
        <div>
            <h3>Attempts: {attempts}</h3>
            <Button role="button" disabled={attempts < 1} onClick={makeAttempt}>
                use
            </Button>
            <Button role="button" onClick={gainAttempts}>
                gain
            </Button>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Request: </Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                />
            </Form.Group>
        </div>
    );
}
