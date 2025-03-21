import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import Text from "@shared/Text";
import Flex from "@shared/Flex";
import Spacing from "@shared/Spacing";

const Nutrition = () => {
  return (
    <NutritionWrapper>
      <Text color="primary" typography="t5" bold>
        Nutrition Facts
      </Text>
      <Spacing size={4} backgroundColor="primary" />
      <Text color="primary" typography="t7">
        355ml per drink
      </Text>
      <Flex justify="space-between">
        <Text color="primary" typography="t7" bold>
          건강한 에너지
        </Text>
        <Text color="primary" typography="t7" bold>
          100%
        </Text>
      </Flex>
      <Spacing size={10} backgroundColor="primary" />
      <Text color="primary" typography="t7" bold>
        신선한 과일과 야채
      </Text>
      <Spacing size={5} />
      <Flex justify="space-between">
        <Text color="primary" typography="t5" bold>
          Flavours
        </Text>
        <Text color="primary" typography="t5" bold>
          16
        </Text>
      </Flex>
      <Spacing size={6} backgroundColor="primary" />
      <Text color="primary" typography="t7" textAlign="right">
        keyword
      </Text>
      <Spacing size={2} backgroundColor="primary" />
      <Flex justify="space-between">
        <Text color="primary" typography="t6">
          톡 쏘는 탄산
        </Text>
        <Text color="primary" typography="t6">
          10종
        </Text>
      </Flex>
      <IndentedTextBlock>
        <Spacing size={1} backgroundColor="primary" />
        <Flex justify="space-between">
          <Text color="primary" typography="t6">
            부드러운 약탄산
          </Text>
          <Text color="primary" typography="t6">
            3종
          </Text>
        </Flex>
        <Spacing size={1} backgroundColor="primary" />
        <Text color="primary" typography="t6">
          부드럽거나 강하거나
        </Text>
      </IndentedTextBlock>
      <Spacing size={1} backgroundColor="primary" />
      <Text color="primary" typography="t6" bold>
        제로슈거 3종
      </Text>
      <Spacing size={1} backgroundColor="primary" />
      <Flex justify="space-between">
        <Text color="primary" typography="t6">
          달콤한 소다
        </Text>
        <Text color="primary" typography="t6">
          11종
        </Text>
      </Flex>
      <Spacing size={1} backgroundColor="primary" />
      <Flex justify="space-between">
        <Text color="primary" typography="t6">
          건강한 야채 주스
        </Text>
        <Text color="primary" typography="t6">
          3종
        </Text>
      </Flex>
      <Spacing size={1} backgroundColor="primary" />
      <Flex justify="space-between">
        <Text color="primary" typography="t6">
          크리미한 스무디
        </Text>
        <Text color="primary" typography="t6">
          2종
        </Text>
      </Flex>
      <Spacing size={6} backgroundColor="primary" />
      <Text color="primary" typography="t7">
        * 자연의 맛, 건강한 에너지, 신선한 과일과 야채, 다양한 취향, 당신을 위한 맞춤 음료, 즐거운 한 모금.
      </Text>
    </NutritionWrapper>
  );
};

export default Nutrition;

const NutritionWrapper = styled.div`
  max-width: 500px;
  min-width: 450px;
  border: solid 3px ${colors.primary};
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: 100%;

  span {
    padding: 5px 0px;
  }
`;

const IndentedTextBlock = styled.div`
  width: 95%;
  margin: 0 0 0 auto;
`;
