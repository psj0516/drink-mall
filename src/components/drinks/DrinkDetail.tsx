import styled from "@emotion/styled";
import { Drink } from "@/models/drink";
import { colors } from "@/styles/colorPalette";
import LevelBar from "@shared/LevelBar";
import Paragraph from "@shared/Paragraph";
import Text from "@shared/Text";
import Spacing from "@shared/Spacing";
import { drinkTypeMap } from "@constants/drink";
import Skeleton from "@shared/Skeleton";
import withSuspense from "@/hooks/withSuspense";

interface Props {
  drink: Drink | null;
}

const DrinkDetail = ({ drink }: Props) => {
  return (
    <>
      {drink ? (
        <DrinkDetailContainer>
          <ImgContainer>
            <DrinkImg src={drink.img} alt={drink.name} />
          </ImgContainer>
          <DrinkinfoContainer>
            <DrinkHeader>
              <DrinkName color={drink.color}>{drink.name}</DrinkName>
              <Spacing size={10} />
              <Paragraph color="tertiary" dangerouslySetInnerHTML={{ __html: drink.description }} />
            </DrinkHeader>
            <Spacing size={30} />
            <Drinkinfo>
              <InfoTitle color={drink.color}>맛</InfoTitle>
              <Text typography="t4" color="tertiary">
                {drink.flavor}
              </Text>
              <Spacing size={20} />
              <InfoTitle color={drink.color}>유형</InfoTitle>
              <Text typography="t4" color="tertiary">
                {drinkTypeMap[drink.type]}
              </Text>
              <Spacing size={20} />
              <InfoTitle color={drink.color}>당도</InfoTitle>
              <LevelBar level={drink.sweetness} width="20%" height="30px" maxLevel={5} />
              <Spacing size={20} />
              <InfoTitle color={drink.color}>탄산</InfoTitle>
              <LevelBar level={drink.carbonation} width="20%" height="30px" maxLevel={5} />
            </Drinkinfo>
          </DrinkinfoContainer>
        </DrinkDetailContainer>
      ) : null}
    </>
  );
};

export function DrinkDetailSkeleton() {
  return (
    <DrinkDetailContainer>
      <ImgContainer>
        <Skeleton width={400} height={400} />
      </ImgContainer>
      <DrinkinfoContainer>
        <Skeleton width={400} height={500} />
      </DrinkinfoContainer>
    </DrinkDetailContainer>
  );
}

export default withSuspense(DrinkDetail, { fallback: <DrinkDetailSkeleton /> });

const DrinkDetailContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  max-width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
  }
`;

const DrinkImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const DrinkinfoContainer = styled.div`
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

const Drinkinfo = styled.div`
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

const PlaceholderText = styled.div`
  font-size: 16px;
  color: ${colors.tertiary};

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
