import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface Sections {
  drinksRef: React.RefObject<HTMLDivElement | null>;
  storyRef: React.RefObject<HTMLDivElement | null>;
  exploreRef: React.RefObject<HTMLDivElement | null>;
}

interface HeaderProps {
  sections: Sections;
}

const Header = ({ sections }: HeaderProps) => {
  const { drinksRef, storyRef, exploreRef } = sections;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 스크롤 이벤트
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop;
      const headerHeight = 50; // 헤더 높이

      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderWrapper isVisible={isVisible}>
      <MenuWrapper>
        <MenuItem onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>HOME</MenuItem>
        <MenuItem onClick={() => handleScrollToSection(drinksRef)}>DRINKS</MenuItem>
        <MenuItem onClick={() => handleScrollToSection(storyRef)}>STORY</MenuItem>
        <MenuItem onClick={() => handleScrollToSection(exploreRef)}>EXPLORE</MenuItem>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header<{ isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  height: 50px;
  top: 0;
  right: 0;
  z-index: 99;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(-100%)")};

  @media (max-width: 480px) {
    width: 100%;
    background-color: ${colors.darkMint};
    justify-content: center;
    top: 0;
    left: 0;
    right: auto;
  }
`;

const MenuWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const MenuItem = styled.div`
  text-align: right;
  font-family: var(--encode-sans);
  font-weight: 800;
  font-size: 32px;
  color: ${colors.tertiary};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.mint};
  }

  @media (max-width: 480px) {
    color: ${colors.primary};
    font-size: 24px;
    text-align: center;
  }
`;
