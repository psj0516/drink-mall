import styled from "@emotion/styled";
import Text from "@shared/Text";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <Text typography="t2" color="darkMint" bold>
          RE-ACT DRINKS
        </Text>
        <Text typography="t8" color="darkMint">
          R-SODA Inc. © 2025 All Rights Reserved
        </Text>
      </FooterInfo>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--encode-sans);
  padding: 30px 0px;
`;

const FooterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
