import React from "react";
import "./App.css";
<<<<<<< HEAD
import headshot from "./images/prof pic 2.jpg";
=======
>>>>>>> upstream/task-components
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
>>>>>>> upstream/task-components

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ color: "blue" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. By Wyatt Erwin
            </p>
            <p>Hello World!</p>
            <h2>Welcome to my webpage!</h2>
            <img src={headshot} alt="A nice picture of me" />
            <p>That&apos;s me, and here are my three favorite candies.</p>
            <ol>
                <li>Reece&apos;s Peanut Butter Cups</li>
                <li>Twix</li>
                <li>Kit Kat</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            className="App-rectangle"
                            style={{
                                width: 30,
                                height: 90,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            className="App-rectangle"
                            style={{
                                width: 200,
                                height: 50,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
>>>>>>> upstream/task-components
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
