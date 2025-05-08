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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* vertical spacing */
  margin-top: 2rem;
  text-align: center;
`;

const Info = styled.div`
  font-size: 1rem;
`;

const Link = styled.a`
  color: #00bcd4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Contact() {
  return (
    <Container>
      <h1>Contact Me</h1>
      <Column>
        <Info>Email: awsafahmed76.bd@gmail.com</Info>
        <Info>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/awsafahmed76/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awsaf Ahmed
          </Link>
        </Info>
        <Info>
          GitHub:{" "}
          <Link
            href="https://github.com/Awsaf76"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awsaf76
          </Link>
        </Info>
      </Column>
    </Container>
  );
}

export default Contact;
