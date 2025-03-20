import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { Drink } from "@/models/drink";
import { getTopDrinks } from "@/remote/drink";
import { useEffect, useState } from "react";
import Text from "@shared/Text";

const BestDrinks = () => {
  const [topDrinks, setTopDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    fetchTopDrinks();
  }, []);

  const fetchTopDrinks = async () => {
    try {
      const response = await getTopDrinks();
      setTopDrinks(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <BestDrinksWrapper>
      {topDrinks?.map((drink) => (
        <BestDrinkItem bgColor={drink.color ? drink.color : "#ffffff"} key={drink.id}>
          <DrinkImg src={drink.img} alt={drink.name} />
          <TextContainer>
            <MobileRanking>
              <Text typography="t4" color="black">
                판매 누적 {drink.rank}위
              </Text>
            </MobileRanking>
            <Text typography="t4" color="black">
              {drink.name}
            </Text>
          </TextContainer>
        </BestDrinkItem>
      ))}
    </BestDrinksWrapper>
  );
};

export default BestDrinks;

const BestDrinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BestDrinkItem = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px ${colors.tertiary} solid;
  border-radius: 15px;
  padding: 30px 0px;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 480px) {
    width: 100%;
    border-width: 2px;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 10px;
  }
`;

const DrinkImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    max-width: 150px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileRanking = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;
