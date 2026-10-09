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
        My academic journey began at <strong>Nasirabad Government Boys' High School</strong>, where I completed my Secondary School Certificate (SSC). I then continued my studies at <strong>Chittagong Government Model School and College</strong>, where I completed my Higher Secondary Certificate (HSC).
      </Paragraph>
      <Paragraph>
        I completed my Bachelor of Science in <strong>Computer Science and Engineering</strong>, majoring in <strong>Software Engineering</strong>, at the <strong>American International University-Bangladesh (AIUB)</strong> from <strong>2020 to 2024</strong>.
      </Paragraph>
      <Paragraph>
        I am currently pursuing a <strong>Master of Business Administration (MBA)</strong> at <strong>North South University (NSU)</strong>.
      </Paragraph>
    </Container>
  );
};

export default Education;
