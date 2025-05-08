import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #111;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
`;

function Home() {
  return (
    <Container>
      <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I'm Awsaf Ahmed
      </Title>
      <Subtitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
        Software Engineer | Web Developer
      </Subtitle>
    </Container>
  );
}

export default Home;
