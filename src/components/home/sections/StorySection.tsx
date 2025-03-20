import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import Text from "@shared/Text";
import Nutrition from "../widgets/Nutrition";
import Paragraph from "@/components/shared/Paragraph";

const StorySection = () => {
  return (
    <StorySectionWrapper>
      <LeftSection>
        <Nutrition />
      </LeftSection>
      <RightSection>
        <Text typography="t1" color="darkPeach" fontFamily="var(--do-hyeon)" bold>
          OUR STORY
        </Text>
        <Paragraph typography="t5" color="primary">
          우리는 단순한 음료가 아닌,
          <br />
          자연이 선물하는 건강한 맛을 담고자 했습니다. <br />
          <br />
          과일과 야채 본연의 신선함을 그대로 살려 <br />
          몸과 마음을 채우는 한 모금을 만들었습니다. <br />
          <br />
          어떤 날에는 톡 쏘는 상쾌함이 필요하고, <br />
          어떤 날에는 부드럽고 따뜻한 위로가 필요하죠. <br />
          <br />
          그래서 우리는 모두를 만족시킬 수 있는
          <br />
          음료를 찾기 위해 노력했습니다.
          <br />
          과일의 상쾌함,
          <br />
          탄산이 주는 짜릿한 기분,
          <br />
          크리미한 만족감,
          <br />
          채소의 건강한 에너지까지
          <br />
          <br />
          당신의 순간을 더 특별하게 채워줄
          <br />한 모금을 전합니다.
          <br />
          <br />
          이제, 당신만의 한 모금을 만나보세요!
        </Paragraph>
      </RightSection>
    </StorySectionWrapper>
  );
};

export default StorySection;

const StorySectionWrapper = styled.div`
  width: 100%;
  background-color: ${colors.tertiary};
  display: flex;
  padding: 100px 120px;
  box-sizing: border-box;
  gap: 50px;
  font-family: var(--nanum-gothic);

  @media (max-width: 480px) {
    padding: 50px 50px;
  }
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    display: none;
  }
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    white-space: break-spaces;
  }
`;
