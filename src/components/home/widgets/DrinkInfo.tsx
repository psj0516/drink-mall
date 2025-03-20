import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { getRandomDrink } from "@/remote/drink";
import { useEffect, useState } from "react";
import { Drink } from "@/models/drink";
import Skeleton from "@shared/Skeleton";
import withSuspense from "@/hooks/withSuspense";

const drinkTypeMap: Record<number, string> = {
  0: "탄산음료",
  1: "스무디",
  2: "주스",
  3: "제로 소다",
};

function DrinkInfo() {
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    fetchRandomDrink();
  }, []);

  const fetchRandomDrink = async () => {
    try {
      const response = await getRandomDrink();
      setDrink(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <DrinkInfoWrapper>
        {drink ? (
          <>
            <DrinkImageWrapper>
              <DrinkImg src={drink.img} alt={drink.name} />
            </DrinkImageWrapper>
            <DrinkDescContainer>
              <DrinkDescBox>
                <DrinkTitle>{drink.name}</DrinkTitle>
                <DrinkType>
                  {drink.flavor} / {drinkTypeMap[drink.type]}
                </DrinkType>
                <DrinkDesc>
                  <p dangerouslySetInnerHTML={{ __html: drink.description }} />
                </DrinkDesc>
              </DrinkDescBox>
            </DrinkDescContainer>
          </>
        ) : null}
      </DrinkInfoWrapper>
    </>
  );
}

export function DrinkInfoSkeleton() {
  return (
    <DrinkInfoWrapper>
      <DrinkImageWrapper>
        <Skeleton width={400} height={400} />
      </DrinkImageWrapper>
      <DrinkDescContainer>
        <DrinkDescBox>
          <DrinkTitle>
            <Skeleton width={200} height={50} />
          </DrinkTitle>
          <Skeleton width={200} height={400} />
        </DrinkDescBox>
      </DrinkDescContainer>
    </DrinkInfoWrapper>
  );
}

export default withSuspense(DrinkInfo, { fallback: <DrinkInfoSkeleton /> });

const DrinkInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 20px 0px;
    min-height: 400px;
  }
`;

const DrinkImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DrinkImg = styled.img`
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const DrinkDescContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const DrinkDescBox = styled.div`
  width: 100%;
  color: ${colors.tertiary};
  border: 5px ${colors.darkMint} solid;
  border-right: none;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px ${colors.darkMint} solid;
    padding: 10px;
  }
`;

const DrinkTitle = styled.div`
  font-weight: 700;
  border-bottom: 5px ${colors.darkMint} solid;
  padding: 30px 30px;
  font-size: 48px;

  @media (max-width: 480px) {
    font-size: 32px;
    font-weight: 700;
    border-bottom: none;
    padding: 10px 10px 5px;
  }
`;

const DrinkType = styled.div`
  padding: 30px 30px 10px;
  font-size: 48px;

  @media (max-width: 480px) {
    font-size: 24px;
    border-bottom: none;
    padding: 5px 10px 5px;
  }
`;

const DrinkDesc = styled.div`
  padding: 10px 30px 30px;
  font-size: 32px;
  line-height: 1.4;
  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 20px;
    border-bottom: none;
    padding: 5px 10px 10px;
    text-align: center;
  }
`;
