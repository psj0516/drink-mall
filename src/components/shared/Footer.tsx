import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import Text from "@shared/Text";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfto>
        <Text typography="t2" color="darkMint" bold>
          RE-ACT DRINKS
        </Text>
        <Text typography="t8" color="darkMint">
          R-SODA Inc. © 2025 All Rights Reserved
        </Text>
      </FooterInfto>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  font-family: var(--encode-sans);
  padding: 50px 0px;

  @media (max-width: 480px) {
    padding: 30px 0px;
  }
`;

const FooterInfto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
