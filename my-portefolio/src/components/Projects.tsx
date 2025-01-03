import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="d-flex overflow-auto">
                <div className="col-4">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Instant Messaging Web App</h2>
                    <p>Placeholder text</p>
                </div>
                <div className="col-4">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Game Session Management Web App</h2>
                    <p>Placeholder text</p>
                </div>
                <div className="col-4">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Shows & Events Chelas Web App</h2>
                    <p>Placeholder text</p>
                </div>
                <div className="col-4">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Gomoku Royale Android App</h2>
                    <p>Placeholder text</p>
                </div>
                <div className="col-4">
                    <img src="image.png" alt="Instant Messaging App" />
                    <h2>Checkers App</h2>
                    <p>Placeholder text</p>
                </div>
            </div>
        </div>
    )
}