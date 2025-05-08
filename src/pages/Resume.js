import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #111;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Button = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background: #00bcd4;
  color: white;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background: #0097a7;
  }
`;

function Resume() {
  return (
    <Container>
      <h1>My Resume</h1>
      <p>Click below to view or download my resume in PDF format.</p>
      <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Button>
    </Container>
  );
}

export default Resume;
