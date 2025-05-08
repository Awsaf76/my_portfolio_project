import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #111;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  max-width: 800px;
  text-align: justify;
  line-height: 1.8;
`;

const Services = () => {
  return (
    <Container>
      <Heading>Services</Heading>
      <Paragraph>
        With a strong academic background in Software Engineering and practical experience in multiple projects, I offer a comprehensive range of software development services. My expertise includes full-stack web development, where I build dynamic and user-friendly applications using technologies such as JavaScript, PHP, Node.js, React.js, and the .NET framework. I’m proficient in C, C++, C#, Java, and Python, allowing me to develop customized solutions across various platforms.
      </Paragraph>
      <Paragraph>
        I also provide UI/UX design services, ensuring clean interfaces using HTML, CSS, Bootstrap, and design tools like Figma. On the backend, I manage data efficiently using MySQL, Oracle, and SQL Server Management Studio (SSMS). Additionally, I’m skilled in API integration, version control with Git & GitHub, and writing clean, scalable code following software engineering best practices.
      </Paragraph>
      <Paragraph>
        Whether it's designing sleek frontends, engineering robust backend systems, or managing databases, I aim to deliver high-quality, efficient, and secure software solutions tailored to meet your business goals.
      </Paragraph>
    </Container>
  );
};

export default Services;
