import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, toggleEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [student, toggleStudent] = useState(true);

    function changeEditMode(): void {
        toggleEditMode(!editMode);
    }
    function changeStudent(): void {
        toggleStudent(!student);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        if (editMode) setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                checked={editMode}
                onChange={changeEditMode}
            />
            <Form.Check
                type="checkbox"
                id="student-check"
                label="Student"
                checked={student}
                onChange={changeStudent}
            />
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={userName} onChange={updateName} />
            </Form.Group>
            <div>
                {userName} is {student ? "a student" : "not a student"}.
            </div>
        </div>
    );
}
