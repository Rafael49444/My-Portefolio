import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export function Skills() {
  return (
    <div className="container" id="skills">
      <h1 className="skill-title">Skills</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="skills-group">
            <h3 className="skill-title">
              <b>Front-End</b>
            </h3>
            <div className="row">
              <div className="col-4">
                <img src="icons/HTML5.svg" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="col-4">
                <img src="icons/CSS3.svg" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="col-4">
                <img src="icons/JavaScript.svg" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="col-3">
                <img src="icons/TypeScript.svg" alt="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div className="col-3">
                <img src="icons/React.svg" alt="React" />
                <p>React</p>
              </div>
              <div className="col-3">
                <img src="icons/Vue.Js.svg" alt="VueJs" />
                <p>VueJs</p>
              </div>
              <div className="col-3">
                <img src="icons/Bootstrap.svg" alt="Bootstrap" />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skills-group">
            <h3 className="skill-title">
                <b>Back-End</b>
            </h3>
            <div className="row">
              <div className="col-4">
                <img src="icons/Node.js.svg" alt="Node.js" />
                <p>Node.js</p>
              </div>
              <div className="col-4">
                <img src="icons/Express.svg" alt="Express" />
                <p>Express</p>
              </div>
              <div className="col-4">
                <img src="icons/spring.svg" alt="Spring Boot" />
                <p>Spring Boot</p>
              </div>
              <div className="col-3">
                <img src="icons/Java.svg" alt="Java" />
                <p>Java</p>
              </div>
              <div className="col-3">
                <img src="icons/Python.svg" alt="Python" />
                <p>Python</p>
              </div>
              <div className="col-3">
                <img src="icons/Kotlin.svg" alt="Kotlin" />
                <p>Kotlin</p>
              </div>
              <div className="col-3">
                <img src="icons/Android.svg" alt="Android" />
                <p>Android</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skills-group">
            <h3 className="skill-title">
              <b>Database</b>
            </h3>
            <div className="row">
              <div className="col-3">
                <img src="icons/PostgresSQL.svg" alt="PostgreSQL" />
                <p>PostgreSQL</p>
              </div>
              <div className="col-3">
                <img src="icons/MongoDB.svg" alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div className="col-3">
                <img src="icons/firebase.svg" alt="Firebase" />
                <p>Firebase</p>
              </div>
              <div className="col-3">
                <img src="icons/Elastic Search.svg" alt="ElasticSearch" />
                <p>ElasticSearch</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skills-group">
            <h3 className="skill-title">
              <b>Tools</b>
            </h3>
            <div className="row">
              <div className="col-2">
                <img src="icons/git.png"></img>
                <p>Git</p>
              </div>
              <div className="col-2">
                <img src="icons/github.png"></img>
                <p>GitHub</p>
              </div>
              <div className="col-2">
                <img src="icons/VS Code.svg"></img>
                <p>VS Code</p>
              </div>
              <div className="col-2">
                <img src="icons/IntelliJ_IDEA_Icon.svg"></img>
                <p>IntelliJ</p>
              </div>
              <div className="col-2">
                <img src="icons/Postman.svg"></img>
                <p>Postman</p>
              </div>
              <div className="col-2">
                <img src="icons/docker.png"></img>
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
