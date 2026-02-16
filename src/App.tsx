import React from "react";
import "./App.css";
import headshot from "./images/prof pic 2.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ color: "blue" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
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
        </div>
    );
}

export default App;
