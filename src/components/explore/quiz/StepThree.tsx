"use client";

import { useState } from "react";
import Form from "./Form";
import NextButton from "./NextButton";

const StepThree = ({ onNext }: { onNext: (values: { sweetnessLevel: number }) => void }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const sweetnessOptions = [
    { label: "많이 달지 않은 맛", value: 2 },
    { label: "보통 단 맛", value: 3 },
    { label: "많이 단 맛", value: 5 },
  ];

  return (
    <>
      <Form question="어느 정도의 단 맛을 선호하시나요?" options={sweetnessOptions} selected={selected} onSelect={setSelected} />
      <NextButton disabled={selected === null} onNext={() => onNext({ sweetnessLevel: selected! })} />
    </>
  );
};

export default StepThree;
