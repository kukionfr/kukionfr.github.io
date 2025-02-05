import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kyu Sang Han </span>
            from <span className="purple"> Seoul, South Korea.</span>
            <br />
            I am currently employed as a postdoctoral researcher at Johns Hopkins University.
            <br />
            I have B.S., M.S., Ph.D in Chemical and Biomolecular Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building interior objects
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kyu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
