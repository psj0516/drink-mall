import { useRef } from "react";
import Header from "@shared/Header";
import Footer from "@shared/Footer";
import TopSection from "./sections/TopSection";
import SpecialtySection from "./sections/SpecialtySection";
import DrinkSection from "./sections/DrinkSection";
import ExploreSection from "./sections/ExploreSection";
import StorySection from "./sections/StorySection";
import Spacing from "@shared/Spacing";
import styled from "@emotion/styled";

interface MainSections {
  drinksRef: React.RefObject<HTMLDivElement | null>;
  storyRef: React.RefObject<HTMLDivElement | null>;
  exploreRef: React.RefObject<HTMLDivElement | null>;
}

const Main = () => {
  const drinksRef = useRef<HTMLDivElement>(null!);
  const storyRef = useRef<HTMLDivElement>(null!);
  const exploreRef = useRef<HTMLDivElement>(null!);

  const sections: MainSections = { drinksRef, storyRef, exploreRef };

  return (
    <>
      <Header sections={sections} />
      <MainContainer>
        <TopSection />
        <Spacing size={100} />
        <SpecialtySection />
        <Spacing size={100} />
        <SectionWrapper ref={drinksRef}>
          <DrinkSection />
        </SectionWrapper>
        <Spacing size={120} />
        <SectionWrapper ref={storyRef}>
          <StorySection />
        </SectionWrapper>
        <SectionWrapper ref={exploreRef}>
          <ExploreSection />
        </SectionWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 320px;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
`;
