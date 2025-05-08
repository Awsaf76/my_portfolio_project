import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #111;
  color: white;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 800px;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  text-align: left;
`;

const ProjectItem = styled.li`
  margin-bottom: 2rem;
`;

const ProjectLink = styled.a`
  color: #00bcd4;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterNote = styled.p`
  margin-top: 2rem;
  max-width: 800px;
  line-height: 1.6;
`;

function Projects() {
  return (
    <Container>
      <Title>Projects</Title>
      <Description>
        Here are some of the notable projects I had completed:
      </Description>
      <ProjectList>
        <ProjectItem>
          <ProjectLink
            href="https://github.com/Awsaf76/InventoryManagementSystem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inventory Management System
          </ProjectLink>
          <br />
          A basic inventory management system developed in C#, enabling different user roles to utilize the system. It offers features for admins to manage orders and inventory, while regular users can organize their orders and browsing cart.
        </ProjectItem>

        <ProjectItem>
          <ProjectLink
            href="https://github.com/Awsaf76/Computer_Lab_Management_Python"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computer Lab Management System
          </ProjectLink>
          <br />
          A basic computer lab management system developed in Python to organize lab and PC information. It enables admins to add, update, access, and delete lab and PC data efficiently.
        </ProjectItem>

        <ProjectItem>
          <ProjectLink
            href="https://github.com/Awsaf76/Food_Court_Management_System_JAVA"
            target="_blank"
            rel="noopener noreferrer"
          >
            FoodCourt Management System
          </ProjectLink>
          <br />
          A JAVA-based basic food court management system project.
        </ProjectItem>

        <ProjectItem>
          <ProjectLink
            href="https://github.com/Awsaf76/krishi_desk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Krishi Desk
          </ProjectLink>
          <br />
          A web-based platform designed to support farmers by providing agricultural information and resources. Built using PHP, CSS, HTML, MYSQL, MKDocs, Selenium. Used AJAX for backend server and API for weather updates.
        </ProjectItem>

        <ProjectItem>
          <ProjectLink
            href="https://github.com/Awsaf76/onlline_note_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Online Note Share
          </ProjectLink>
          <br />
          A simple note sharing website for both students & faculties. Built using PHP, CSS, HTML, Bootstrap, MYSQL.
        </ProjectItem>

        <ProjectItem>
          <ProjectLink
            href="https://github.com/Awsaf76/Chartiable_Donation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charitable Donation System
          </ProjectLink>
          <br />
          A Java-based basic project with some GUI implemented features.
        </ProjectItem>
      </ProjectList>
      <FooterNote>
        You can discover details about my other projects on{" "}
        <ProjectLink
          href="https://github.com/Awsaf76"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ProjectLink>
        .
      </FooterNote>
    </Container>
  );
}

export default Projects;
