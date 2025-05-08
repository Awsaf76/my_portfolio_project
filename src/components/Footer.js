import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  text-align: center;
  padding: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Awsaf Ahmed. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
