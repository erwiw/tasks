import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, changeAnswer] = useState("");

    function setAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        changeAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={setAnswer} />
            </Form.Group>
            {expectedAnswer === answer ?
                <div>✔️</div>
            :   <div>❌</div>}
        </div>
    );
}
