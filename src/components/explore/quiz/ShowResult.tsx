"use client";

import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { Drink } from "@/models/drink";
import { drinkTypeMap } from "@constants/drink";
import LevelBar from "@shared/LevelBar";
import Spacing from "@shared/Spacing";
import Text from "@shared/Text";
import Paragraph from "@shared/Paragraph";

interface ShowResultProps {
  drinkInfo: Drink;
  onRestart: () => void;
}

const ShowResult = ({ drinkInfo, onRestart }: ShowResultProps) => {
  return (
    <>
      <DrinkDetailWrapper>
        <DrinkHeader>
          <DrinkName color={drinkInfo.color}>{drinkInfo.name}</DrinkName>
          <Spacing size={10} />
          <Paragraph color="tertiary" dangerouslySetInnerHTML={{ __html: drinkInfo.description }}></Paragraph>
        </DrinkHeader>
        <Spacing size={30} />
        <DrinkDetailBody>
          <InfoTitle color={drinkInfo.color}>맛</InfoTitle>
          <Text typography="t4" color="tertiary">
            {drinkInfo.flavor}
          </Text>
          <Spacing size={20} />
          <InfoTitle color={drinkInfo.color}>유형</InfoTitle>
          <Text typography="t4" color="tertiary">
            {drinkTypeMap[drinkInfo.type]}
          </Text>
          <Spacing size={20} />
          <InfoTitle color={drinkInfo.color}>당도</InfoTitle>
          <LevelBar level={drinkInfo.sweetness} width="20%" height="30px" maxLevel={5} />
          <Spacing size={20} />
          <InfoTitle color={drinkInfo.color}>탄산</InfoTitle>
          <LevelBar level={drinkInfo.carbonation} width="20%" height="30px" maxLevel={5} />
        </DrinkDetailBody>
        <Spacing size={50} />
        <RestartButton onClick={onRestart}>테스트 다시 하기</RestartButton>
      </DrinkDetailWrapper>
    </>
  );
};

export default ShowResult;

const DrinkDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DrinkHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrinkName = styled.div<{ color: string }>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: 48px;
  transition: color 0.3s ease-in-out;

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const DrinkDetailBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.p<{ color: string }>`
  color: ${({ color }) => (color ? color : "inherit")};
  font-size: 40px;
  transition: color 0.3s ease-in-out;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const RestartButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${colors.peach};
  color: ${colors.tertiary};
  border-radius: 5px;
  border: none;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.redOrange};
    color: ${colors.primary};
  }
`;
