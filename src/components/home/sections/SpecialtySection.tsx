import { useEffect, useState, useRef } from "react";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import Text from "@shared/Text";

const SpecialtySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.9 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SpecialtySectionWrapper ref={sectionRef}>
      <SpecialtyBox>
        <SpecialtyItem isVisible={isVisible} animationDelay={0}>
          <Text typography="t2" color="darkMint" bold>
            CONTAIN
          </Text>
          <Text typography="t3">FRUIT & VEGGIE</Text>
        </SpecialtyItem>
        <SpecialtyItem isVisible={isVisible} animationDelay={0.3}>
          <Text typography="t2" color="darkMint" bold>
            OPTION
          </Text>
          <Text typography="t3">ZERO SUGAR</Text>
        </SpecialtyItem>
        <SpecialtyItem isVisible={isVisible} animationDelay={0.6}>
          <Text typography="t2" color="darkMint" bold>
            10+
          </Text>
          <Text typography="t3">FLAVOUR</Text>
        </SpecialtyItem>
      </SpecialtyBox>
    </SpecialtySectionWrapper>
  );
};

export default SpecialtySection;

const SpecialtySectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecialtyBox = styled.div`
  width: 90%;
  display: flex;
  padding: 30px 0px;
  justify-content: space-evenly;
  align-items: center;
  border: 5px solid ${colors.darkMint};

  @media (max-width: 480px) {
    border: none;
    flex-direction: column;
    padding: 10px 0px;
    gap: 10px;
  }
`;

const SpecialtyItem = styled.div<{ isVisible: boolean; animationDelay: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--encode-sans);
  opacity: 0;
  transform: translateY(40px);
  ${({ isVisible, animationDelay }) =>
    isVisible &&
    `
      animation: fadeInUp 1s ease-out forwards;
      animation-delay: ${animationDelay}s;
    `}

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
