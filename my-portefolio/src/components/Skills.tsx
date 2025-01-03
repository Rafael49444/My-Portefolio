import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Skills() {
    return(
        <div className="skills">
            <h1>Skills</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Front-End</h2>
                    <ul>
                        <img src="icons/HTML5.svg" ></img>HTML
                        <img src="icons/CSS3.svg" ></img>CSS
                        <img src="icons/JavaScript.svg" ></img>JavaScript   
                        <img src="icons/TypeScript.svg" ></img>TypeScript
                        <img src="icons/React.svg" ></img>React
                        <img src="icons/Vue.Js.svg" ></img>VueJs
                        <img src="icons/Bootstrap.svg" ></img>Bootstrap
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2>Back-End</h2>
                    <ul>
                        <img src="icons/Node.js.svg" ></img>Node.js
                        <img src="icons/Express.svg" ></img>Express
                        <img src="icons/spring.svg" ></img>Spring Boot
                        <img src="icons/Java.svg" ></img>Java
                        <img src="icons/Python.svg" ></img>Python
                        <img src="icons/Kotlin.svg" ></img>Kotlin
                        <img src="icons/Android.svg" ></img>Android
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2><b>Database</b></h2>
                    <ul>
                        <img src="icons/PostgresSQL.svg" ></img>PostgreSQL
                        <img src="icons/MongoDB.svg" ></img>MongoDB
                        <img src="icons/firebase.svg" ></img>Firebase
                        <img src="icons/Elastic Search.svg" ></img>ElasticSearch
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2><b>Tools</b></h2>
                    <ul>
                        <img src="icons/git.png" ></img>Git
                        <img src ="icons/github.png"></img>GitHub
                        <img src ="icons/visual-studio.png"></img>VS Code
                        <img src="icons/IntelliJ_IDEA_Icon.svg"></img>IntelliJ
                        <img src="icons/Postman.svg"></img>Postman
                        <img src="icons/docker.png"></img>Docker
                    </ul>
                </div>
            </div>
        </div>
    )
}