import Paragraph from "@/components/shared/Paragraph";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ExploreSection = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

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
      <ExploreSectionWrapper>
        <Title>EXPLORE</Title>
        <ContentWrapper>
          <TextContainer>
            <DesktopParagraph typography="t4" color="primary" textAlign="right" bold>
              상큼한 과일?
              <br />
              톡 쏘는 상쾌함?
              <br />
              부드러운 목넘김?
              <br />
              달콤한 갈증해소?
              <br />
              건강한 아침대용?
            </DesktopParagraph>
            <MobileParagraph typography="t5" color="primary" textAlign="center">
              상큼한 과일?
              <br />
              톡 쏘는 상쾌함? 부드러운 목넘김?
              <br />
              달콤한 갈증해소? 건강한 아침대용?
            </MobileParagraph>
          </TextContainer>
          <ImageWrapper>
            <BlankCanImg onMouseEnter={() => setIsCursorVisible(true)} onMouseLeave={() => setIsCursorVisible(false)} src="/img/none.png" alt="blank-can" />
          </ImageWrapper>
          <TextContainer textAlign="right">
            <DesktopParagraph typography="t4" color="primary" textAlign="left" bold>
              간단한 테스트로
              <br />
              당신의 완벽한
              <br />한 모금을 찾아보세요!
            </DesktopParagraph>
            <MobileParagraph typography="t5" color="primary" textAlign="center">
              간단한 테스트로 당신의 완벽한
              <br />한 모금을 찾아보세요!
            </MobileParagraph>
            <ExploreButton onClick={() => router.push("/explore")}>테스트 하러가기&nbsp;&#10230;</ExploreButton>
          </TextContainer>
        </ContentWrapper>
      </ExploreSectionWrapper>
      {isCursorVisible && <Cursor style={{ top: mousePosition.y, left: mousePosition.x }}>?</Cursor>}
    </>
  );
};

export default ExploreSection;

const ExploreSectionWrapper  = styled.div`
  width: 100%;
  background-color: ${colors.redOrange};
  font-family: var(--nanum-gothic);
  display: flex;
  padding: 50px 0px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 480px) {
    padding: 20px 0px;
    gap: 10px;
  }
`;

const Title = styled.div`
  font-size: 72px;
  font-weight: 700;
  color: ${colors.primary};
  font-family: var(--do-hyeon);

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlankCanImg = styled.img`
  width: 250px;
  cursor: none;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const TextContainer = styled.div<{ textAlign?: "left" | "right" }>`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: ${({ textAlign }) => (textAlign === "right" ? "flex-start" : "flex-end")};
  justify-content: flex-end;

  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;

const DesktopParagraph = styled(Paragraph)`
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileParagraph = styled(Paragraph)`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;

const ExploreButton = styled.button`
  margin: 2px 0px;
  padding: 12px 24px;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.primary};
  background-color: ${colors.tertiary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.darkPeach};
  }

  @media (max-width: 480px) {
    margin: 10px 0px 0px;
    padding: 10px 12px;
    font-size: 16px;
  }
`;

/* 커스텀 커서 */
const Cursor = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  background-color: ${colors.primary};
  color: ${colors.tertiary};
  border-radius: 50%;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: difference;
`;
