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
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

const Content = styled.div`
  flex: 1;
  text-align: left;
  line-height: 1.8;
`;

const About = () => {
  return (
    <Container>
      <Heading>About Me</Heading>
      <FlexWrapper>
        <Image src="/images/Awsaf_Ahmed.jpeg" alt="Awsaf Ahmed" />
        <Content>
          <p>
            Hi, I’m <strong>Awsaf Ahmed</strong>, a passionate and motivated Software Engineering graduate from the <strong>American International University-Bangladesh (AIUB)</strong>. I have a strong foundation in both front-end and back-end technologies, and I strive to build clean, scalable, and efficient digital solutions that make an impact.
          </p>
          <p>
            Throughout my academic journey, I have worked on multiple real-world projects that reflect my proficiency in languages such as <strong>C, C++, C#, Java, Python</strong>, and web technologies like <strong>PHP, JavaScript, React, Node.js, HTML, CSS, Bootstrap</strong>, and more. My knowledge also extends to <strong>MySQL, Oracle, SSMS</strong>, and version control systems like <strong>Git & GitHub</strong>. I enjoy solving problems, learning new tools, and turning ideas into working applications.
          </p>
          <p>
            I am always eager to collaborate, learn, and grow within dynamic environments. Whether it’s designing intuitive user interfaces or engineering robust backend systems, I bring creativity and precision to every project.
          </p>
        </Content>
      </FlexWrapper>
    </Container>
  );
};

export default About;
