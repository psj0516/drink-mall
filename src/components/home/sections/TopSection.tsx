import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { DrinkInfoSkeleton } from "../widgets/DrinkInfo";
import dynamic from "next/dynamic";

const DrinkInfo = dynamic(() => import("@components/home/widgets/DrinkInfo"), {
  ssr: false,
  loading: () => <DrinkInfoSkeleton />,
});

const TopSection = () => {
  return (
    <>
      <TopSectionWrapper>
        <IntroSection>
          <TitleText>
            CHOOSE YOUR
            <br />
            IDEAL DRINK
          </TitleText>
        </IntroSection>
        <ContentSection>
          <Sidebar>
            <Label>re-act</Label>
          </Sidebar>
          <MainContent>
            <PhraseContainer>
              하루를 깨우는
              <br />
              자연의 맛
            </PhraseContainer>
            <DrinkInfo />
          </MainContent>
        </ContentSection>
      </TopSectionWrapper>
    </>
  );
};

export default TopSection;

const TopSectionWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 480px) {
    padding: 70px 20px 20px;
    box-sizing: border-box;
    flex-direction: column;
  }
`;

const IntroSection = styled.div`
  width: 400px;
  background-color: ${colors.darkMint};
  height: 100vh;
  display: flex;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    border: solid 3px ${colors.darkMint};
  }
`;

const TitleText = styled.p`
  color: ${colors.primary};
  font-family: var(--encode-sans);
  font-size: 96px;
  font-weight: bold;
  writing-mode: sideways-lr;
  width: max-content;
  white-space: nowrap;
  text-align: left;
  position: absolute;
  right: 30px;
  bottom: 30px;

  @media (max-width: 480px) {
    position: static;
    font-size: 36px;
    writing-mode: horizontal-tb;
    padding: 10px 20px;
  }
`;

const ContentSection = styled.div`
  margin-top: 60px;
  margin-left: 30px;
  width: 100%;
  border: solid 5px ${colors.darkMint};
  border-right: none;
  display: flex;

  @media (max-width: 480px) {
    margin-top: 0px;
    margin-left: 0px;
    border: solid 3px ${colors.darkMint};
  }
`;

const Sidebar = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-right: solid 5px ${colors.darkMint};
  padding: 0px 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Label = styled.div`
  font-family: var(--encode-sans);
  font-weight: bold;
  font-size: 24px;
  color: ${colors.primary};
  background: ${colors.darkMint};
  width: 70px;
  height: 70px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PhraseContainer = styled.div`
  font-weight: 500;
  font-size: 72px;
  line-height: 1.2;
  padding: 20px 30px;
  letter-spacing: 3px;
  color: ${colors.darkMint};
  border-bottom: solid 5px ${colors.darkMint};

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 1.1;
    border-bottom: solid 3px ${colors.darkMint};
    padding: 10px 20px;
  }
`;
