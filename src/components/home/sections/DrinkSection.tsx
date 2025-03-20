import { useEffect, useState } from "react";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import BestDrinks from "../widgets/BestDrinks";
import { useRouter } from "next/router";
import Spacing from "@shared/Spacing";

const DrinkSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <DrinkSectionWrapper>
        <Title>BEST FLAVOR</Title>
        <Spacing size={40} />
        <BestDrinksContainer>
          <BestDrinks />
          <LinkWrapper>
            <LinkText
              onClick={() => {
                router.push("/drinks");
              }}
              onMouseEnter={() => setIsCursorVisible(true)}
              onMouseLeave={() => setIsCursorVisible(false)}
            >
              전체보기&nbsp;&#10230;
            </LinkText>
          </LinkWrapper>
        </BestDrinksContainer>
      </DrinkSectionWrapper >
      {isCursorVisible && <Cursor style={{ top: mousePosition.y, left: mousePosition.x }}>MORE</Cursor>}
    </>
  );
};

export default DrinkSection;

const DrinkSectionWrapper  = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Title = styled.div`
  font-size: 72px;
  font-weight: 700;
  color: transparent;
  background-image: url("/resource/wave.png");
  background-position: center;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const BestDrinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: right;
`;

const LinkText = styled.span`
  font-size: 24px;
  cursor: none;
  position: relative;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

/* 커스텀 커서 */
const Cursor = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  background-color: ${colors.mint};
  color: ${colors.primary};
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;

  @media (max-width: 480px) {
    display: none;
  }
`;
