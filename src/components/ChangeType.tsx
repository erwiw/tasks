import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

export function ChangeType(): React.JSX.Element {
    const [type, changeType] = useState("short_answer_question");
    function flipType(): void {
        if (type === "short_answer_question")
            changeType("multiple_choice_question");
        else changeType("short_answer_question");
    }
    return (
        <div>
            <Button role="button" onClick={flipType}>
                Change Type
            </Button>
            {type === "short_answer_question" && <div>Short Answer</div>}
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
=======
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    return <div>Change Type</div>;
>>>>>>> upstream/task-components
}
