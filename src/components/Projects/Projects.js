import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import film from "../../Assets/Projects/film.jpg";
import senescense from "../../Assets/Projects/emotion.png";
import qmap from "../../Assets/Projects/qmap.jpg";
import vampire from "../../Assets/Projects/vampire.webp";
import threedprint from "../../Assets/Projects/threed.jpg";
import coda from "../../Assets/Projects/coda.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vampire}
              isBlog={false}
              title="VAMPIRE"
              description="Visually Aided Morpho-Phenotyping Image Recognition."
              ghLink="https://github.com/kukionfr/VAMPIRE_open"
              demoLink="https://www.nature.com/articles/s41596-020-00432-x"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coda}
              isBlog={false}
              title="CODA"
              description="a method to reconstruct exceptionally large tissues at subcellular resolution using serially sectioned hematoxylin and eosin-stained tissue sections."
              ghLink="https://zenodo.org/records/11130691"
              demoLink="https://www.nature.com/articles/s41592-022-01650-9"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qmap}
              isBlog={false}
              title="microanatomy of human skin aging"
              description="quantitative micro-anatomical phenotyping (qMAP) - that leverages deep learning and machine vision to fully label tissue and cellular compartments in tissue sections. The fully mapped tissue images address the challenges of finding an interpretable feature set to quantitatively profile age-related microanatomic changes"
              ghLink="https://github.com/kukionfr/qMAP"
              demoLink="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244916/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Generative AI FILM"
              description="Here, we address these challenges by leveraging frame interpolation for large image motion (FILM), a generative AI model originally developed for temporal interpolation, for spatial interpolation of a range of 3D image types."
              //ghLink=""
              demoLink="https://pmc.ncbi.nlm.nih.gov/articles/PMC10942457/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threedprint}
              isBlog={false}
              title="High-Resolution 3D Printing of Pancreatic Ductal Microanatomy"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              //ghLink=""
              demoLink="https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/admt.202301837"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={senescense}
              isBlog={false}
              title="Cellular Senescence and Aging"
              description="Cellular senescence is a major driver of aging and disease. Here we show that substrate stiffness modulates the emergence and magnitude of senescence phenotypes after exposure to senescence inducers."
              //ghLink=""
              demoLink="https://pmc.ncbi.nlm.nih.gov/articles/PMC10871290/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
