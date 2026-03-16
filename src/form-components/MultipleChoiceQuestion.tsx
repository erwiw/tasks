import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, selectAnswer] = useState(options[0]);

    function chooseAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        selectAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="userEmotions">
                <Form.Label>What is your answer?</Form.Label>
                <Form.Select value={answer} onChange={chooseAnswer}>
                    {options.map((ans: string) => (
                        <option key={ans}>{ans}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === answer ? "✔️" : "❌"}
        </div>
    );
}
