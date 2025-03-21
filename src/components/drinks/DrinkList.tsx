import styled from "@emotion/styled";
import { Drink } from "@/models/drink";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getDrinks } from "@/remote/drink";
import { DrinkFilterSkeleton } from "./DrinkFilter";
import dynamic from "next/dynamic";
import { DrinkDetailSkeleton } from "./DrinkDetail";

const DrinkFilter = dynamic(() => import("./DrinkFilter"), {
  ssr: false,
  loading: () => <DrinkFilterSkeleton />,
});

const DrinkDetail = dynamic(() => import("./DrinkDetail"), {
  ssr: false,
  loading: () => <DrinkDetailSkeleton />,
});

const DrinkList = () => {
  const [filter, setFilter] = useState<"rank" | "type" | "sweetness">("rank");
  const [drinkList, setDrinkList] = useState<Drink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const router = useRouter();

  const fetchgetDrinks = async () => {
    try {
      const response = await getDrinks();
      setDrinkList(response.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchgetDrinks();
  }, []);

  // 필터 기준으로 정렬
  const sortedData = useMemo(() => {
    if (drinkList.length === 0) return [];

    if (filter === "sweetness") {
      return [...drinkList].sort((a, b) => b[filter] - a[filter]);
    } else {
      return [...drinkList].sort((a, b) => a[filter] - b[filter]);
    }
  }, [drinkList, filter]);

  useEffect(() => {
    if (sortedData.length > 0 && !selectedDrink) {
      setSelectedDrink(sortedData[0]);
    }
  }, [sortedData, selectedDrink]);

  return (
    <DrinkListContainer>
      <DrinkFilter
        filter={filter}
        setFilter={setFilter}
        sortedData={sortedData}
        selectedDrink={selectedDrink}
        setSelectedDrink={setSelectedDrink}
        onGoBack={() => router.back()}
      />
      <DrinkDetail drink={selectedDrink} />
    </DrinkListContainer>
  );
};

export default DrinkList;

const DrinkListContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 40px 40px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
