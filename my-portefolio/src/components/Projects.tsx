import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="d-flex overflow-auto">
                <div className="col-4 project">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Instant Messaging Web App</h2>
                    <h6>
                        <i>TypeScript, React, Node.js, Kotlin, Spring, PostgreSQL, Docker</i>
                    </h6>
                    <p>
                        The instant messaging app is a web application that allows users to send messages to each other in real time. 
                        With a login system through cookies it allows users to create chat rooms these being private or public and send messages. 
                    </p>
                </div>
                <div className="col-4 project">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Game Session Management Web App</h2>
                    <h6>
                        <i>JavaScript, Node.js, HTTP4K, Kotlin, PostgreSQL, Docker, Render</i>
                    </h6>
                    <p>
                        The game session management application is a web application that allows users to create and join game sessions.
                        Uses a login system through session storage.
                    </p>
                </div>
                <div className="col-4 project">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Shows & Events Chelas Web App</h2>
                    <h6>
                        <i>JavaScript, Node.js, HTTP4K, Express, ElasticSearch</i>
                    </h6>
                    <p>
                        The Shows & Events Chelas application is a web application that allows users to view shows and events.
                        Users can view shows and events currently happening through a connection with the TicketMaster API we can view the most popular events,
                        also being able to put them into groups.
                    </p>
                </div>
                <div className="col-4 project">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Gomoku Royale Android App</h2>
                    <h6>
                        <i>Jetpack Compose, Android Kotlin, Firestore</i>
                    </h6>
                    <p>
                        The Gomoku Royale application is an Android application that allows users to play the Gomoku game.
                        Users can play against the computer and also against other players that they choose within the matchmaking lobby implemented.
                    </p>
                </div>
                <div className="col-4 project">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Checkers App</h2>
                    <h6>
                        <i>Jetpack Compose, Kotlin, mongoDB</i>
                    </h6>
                    <p>
                        The Checkers application is a JVM application that allows users to play the Checkers game.
                        The users can play against the computer and also against other players that they choose by creating a game room and sharing its code.
                    </p>
                </div>
            </div>
        </div>
    )
}