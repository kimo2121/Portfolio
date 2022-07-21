import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mutant from "../../Assets/Projects/mutant.png";
import shopping from "../../Assets/Projects/e-commerce.png";
import superLative from "../../Assets/Projects/super.png";
import memories from "../../Assets/Projects/memories.png";
import keepers from "../../Assets/Projects/keepers.png";
import netflix from "../../Assets/Projects/netflix.png";
import restaurant from "../../Assets/Projects/restaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Previous <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix-Next"
              description="Netflix uses ISR, SSR, Serverless functions, Hasura, JWT, MagicLink, GraphQL, YouTube API, Framer Motion, Hooks."
              link="https://github.com/kimo2121/Netflix-Next"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Place-Finder"
              description="Place-Finder uses SSG, Serverless functions, Airtable, Hooks, Context."
              link="https://github.com/kimo2121/Place-Finder"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping-Time"
              description="Practical project to build a shopping cart using react.js, redux, and firebase. Supports adding products to cart, removing products from cart, and checkout."
              link="https://github.com/kimo2121/e-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories-NFT-Marketplace"
              description="NFTs marketplace to sells NFT similar to Opensea, built with React Typescript, Hooks, Context"
              link="https://github.com/kimo2121/NFT-Memories-FrontEnd"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superLative}
              isBlog={false}
              title="Super-Lative"
              description="Minter engine to mint NFTs, buit with React Typescript, Hooks, and Web3."
              link="https://github.com/kimo2121/superlative"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keepers}
              isBlog={false}
              title="Crypto-Keeperz-Club"
              description="Minter engine to mint NFTs, buit with React Typescript, Hooks, and Web3."
              link="https://github.com/kimo2121/crypto-keepers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mutant}
              isBlog={false}
              title="Mutant-Animals"
              description="Minter engine to mint NFTs, buit with React Typescript, Hooks, and Web3."
              link="https://github.com/kimo2121/mutant-animals"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
