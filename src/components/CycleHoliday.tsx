import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
<<<<<<< HEAD
    const [holiday, setHoliday] = useState("Christmas: 🎅");
    function setHolidayValue(holiday: string): void {
        setHoliday(holiday);
    }
    type holidayRecord = Record<string, string>;
    const holidaysAlphabetical: holidayRecord = {
        "Christmas: 🎅": "Easter: 🐰",
        "Easter: 🐰": "Halloween: 👻",
        "Halloween: 👻": "New Years: 🪩",
        "New Years: 🪩": "Thanksgiving: 🦃",
        "Thanksgiving: 🦃": "Christmas: 🎅",
    };
    const holidaysSequential: holidayRecord = {
        "Christmas: 🎅": "New Years: 🪩",
        "Easter: 🐰": "Halloween: 👻",
        "Halloween: 👻": "Thanksgiving: 🦃",
        "New Years: 🪩": "Easter: 🐰",
        "Thanksgiving: 🦃": "Christmas: 🎅",
    };
    function holidayCycleAlphabetical(): void {
        setHolidayValue(holidaysAlphabetical[holiday]);
    }
    function holidayCycleSequential(): void {
        setHolidayValue(holidaysSequential[holiday]);
    }
    return (
        <div>
            <div data-testid="holiday">Holiday: {holiday}</div>
            <Button role="button" onClick={holidayCycleAlphabetical}>
                Cycle Holiday Alphabetically
            </Button>
            <Button role="button" onClick={holidayCycleSequential}>
                Cycle Holiday By Year
            </Button>
        </div>
    );
=======
    return <div>Cycle Holiday</div>;
>>>>>>> upstream/task-components
}
