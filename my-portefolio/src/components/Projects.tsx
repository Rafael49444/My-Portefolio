import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export function Projects() {
    const images = {
        p1: ["projectImages/chimp.jpeg", "projectImages/chimp2.jpeg", "projectImages/chimp3.jpeg"],
        p2: ["projectImages/games.jpeg", "projectImages/games2.jpeg", "projectImages/games3.jpeg"],
        p3: ["projectImages/seca.jpeg", "projectImages/seca2.jpeg", "projectImages/seca3.jpeg", "projectImages/seca4.jpeg"],
        p4: ["projectImages/gomoku.jpeg", "projectImages/gomoku2.jpeg", "projectImages/gomoku3.jpeg"]
    };

    const [currentImageIndex, setCurrentImageIndex] = React.useState({
        p1: 0,
        p2: 0,
        p3: 0,
        p4: 0
    })

    const handleNextImage = (id) => {
        setCurrentImageIndex((prevIndices) => ({
            ...prevIndices,
            [id]: (prevIndices[id] + 1) % images[id].length
        }));
    }

    const handlePreviousImage = (id) => {
        setCurrentImageIndex((prevIndices) => ({
            ...prevIndices,
            [id]: (prevIndices[id] - 1 + images[id].length) % images[id].length
        }));
    }

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="d-flex overflow-auto">
                <div className="col-4 project">
                    <button onClick={() => handlePreviousImage('p1')} className="arrow-button">{'<'}</button>
                    <img src={images.p1[currentImageIndex.p1]} className="project-image" />
                    <button onClick={() => handleNextImage('p1')} className="arrow-button">{'>'}</button>
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
                    <button onClick={() => handlePreviousImage('p2')} className="arrow-button">{'<'}</button>
                    <img src={images.p2[currentImageIndex.p2]} className="project-image" />
                    <button onClick={() => handleNextImage('p2')} className="arrow-button">{'>'}</button>
                    <h2>Game Session Management Web App</h2>
                    <h6>
                        <i>JavaScript, Node.js, HTTP4K, Kotlin, PostgreSQL, Docker, Render</i>
                    </h6>
                    <p>
                        The game session management application is a web application that allows users to create and join game sessions.
                        Uses a login system through session storage.
                        This app was also deployed using Render.
                    </p>
                </div>
                <div className="col-4 project">
                    <button onClick={() => handlePreviousImage('p3')} className="arrow-button">{'<'}</button>
                    <img src={images.p3[currentImageIndex.p3]} className="project-image" />
                    <button onClick={() => handleNextImage('p3')} className="arrow-button">{'>'}</button>
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
                    <button onClick={() => handlePreviousImage('p4')} className="arrow-button">{'<'}</button>
                    <img src={images.p4[currentImageIndex.p4]} className="project-image" />
                    <button onClick={() => handleNextImage('p4')} className="arrow-button">{'>'}</button>
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
                    <img src='projectImages/checkers.jpeg' className="project-image" />
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