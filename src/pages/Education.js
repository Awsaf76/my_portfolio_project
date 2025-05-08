import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #111;
  color: white;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  max-width: 900px;
  margin: 1.5rem auto;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Education = () => {
  return (
    <Container>
      <Title>Education</Title>
      <Paragraph>
        My academic journey started at <strong>Nasirabad Government Boys' High School</strong>, where I completed my Secondary School Certificate (SSC). I then continued my studies at <strong>Chittagong Government Model School and College</strong> for my Higher Secondary Certificate (HSC).
      </Paragraph>
      <Paragraph>
        To further pursue my passion for technology, I completed my Bachelor’s degree in <strong>Computer Science and Engineering</strong> from the <strong>American International University-Bangladesh (AIUB)</strong>, with a major in <strong>Software Engineering</strong>.
      </Paragraph>
    </Container>
  );
};

export default Education;
