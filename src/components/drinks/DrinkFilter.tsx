import styled from "@emotion/styled";
import { Drink } from "@/models/drink";
import { colors } from "@/styles/colorPalette";
import Skeleton from "@shared/Skeleton";
import withSuspense from "@/hooks/withSuspense";

interface DrinkFilterProps {
  filter: "rank" | "type" | "sweetness";
  setFilter: (value: "rank" | "type" | "sweetness") => void;
  sortedData: Drink[];
  selectedDrink: Drink | null;
  setSelectedDrink: (drink: Drink | null) => void;
  onGoBack: () => void;
}

const DrinkFilter = ({ filter, setFilter, sortedData, selectedDrink, setSelectedDrink, onGoBack }: DrinkFilterProps) => {
  return (
    <DrinkListContainer>
      <GoBackButton onClick={onGoBack}>&#10229;&nbsp;뒤로가기</GoBackButton>
      <ResponsiveFilter>
        <SelectBox value={filter} onChange={(e) => setFilter(e.target.value as any)}>
          <option value="rank">랭킹 순</option>
          <option value="type">타입 순</option>
          <option value="sweetness">단맛 순</option>
        </SelectBox>
        <SelectBox value={selectedDrink?.id || ""} onChange={(e) => setSelectedDrink(sortedData.find((drink) => drink.id === e.target.value) || null)}>
          {sortedData.map((drink) => (
            <option key={drink.id} value={drink.id}>
              {drink.name}
            </option>
          ))}
        </SelectBox>
      </ResponsiveFilter>
      <FilterContainer>
        {(["rank", "type", "sweetness"] as const).map((f) => (
          <FilterButton key={f} isSelected={filter === f} onClick={() => setFilter(f)}>
            {f === "rank" ? "랭킹 순" : f === "type" ? "타입 순" : "단맛 순"}
          </FilterButton>
        ))}
      </FilterContainer>
      <ListWrapper>
        {sortedData.map((drink) => (
          <ListItem key={drink.id} onClick={() => setSelectedDrink(drink)} isSelected={selectedDrink?.id === drink.id}>
            {drink.name}
          </ListItem>
        ))}
      </ListWrapper>
    </DrinkListContainer>
  );
};

export function DrinkFilterSkeleton() {
  return (
    <DrinkListContainer>
      <ListWrapper>
        <Skeleton width={250} height={500} />
      </ListWrapper>
    </DrinkListContainer>
  );
}

export default withSuspense(DrinkFilter, { fallback: <DrinkFilterSkeleton /> });

const DrinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GoBackButton = styled.div`
  width: auto;
  font-size: 18px;
  border-radius: 15px;
  padding: 5px 15px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  background: ${colors.mint};
  color: ${colors.primary};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${colors.darkMint};
    color: ${colors.primary};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const FilterButton = styled.div<{ isSelected: boolean }>`
  font-size: 18px;
  border-radius: 15px;
  padding: 5px 15px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  width: auto;
  background: ${({ isSelected }) => (isSelected ? colors.redOrange : colors.peach)};
  color: ${({ isSelected }) => (isSelected ? colors.primary : colors.tertiary)};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${colors.redOrange};
    color: ${colors.tertiary};
  }
`;

const ResponsiveFilter = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    gap: 10px;
    width: 100%;
  }
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid ${colors.tertiary};
  background: ${colors.primary};
  color: ${colors.tertiary};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const ListItem = styled.div<{ isSelected: boolean }>`
  font-size: 18px;
  border: ${colors.tertiary} 2px solid;
  border-radius: 15px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? colors.tertiary : "transparent")};
  color: ${({ isSelected }) => (isSelected ? colors.primary : "inherit")};
  white-space: nowrap;
  width: auto;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: ${colors.tertiary};
    color: ${colors.primary};
  }
`;
