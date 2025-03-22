"use client";

import { useState } from "react";
import Form from "./Form";
import Spacing from "@shared/Spacing";
import NextButton from "./NextButton";

const StepTwo = ({
  onNext,
  carbonation,
}: {
  onNext: (values: { carbonationLevel?: number; drinkType?: number; zeroOption?: boolean }) => void;
  carbonation: boolean;
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [secSelected, setSecSelected] = useState<number | null>(null);
  const [zeroOption, setZeroOption] = useState<boolean | null>(null);

  const options = carbonation
    ? [
        { label: "약한 탄산", value: 2 },
        { label: "강한 탄산", value: 5 },
      ]
    : [
        { label: "스무디", value: 1 },
        { label: "주스", value: 2 },
      ];

  const secOptions = [
    { label: "제로슈거 선택", value: 3 },
    { label: "일반음료 선택", value: 0 },
  ];

  const handleNext = () => {
    if (carbonation) {
      if (selected !== null && secSelected !== null && zeroOption !== null) {
        onNext({ carbonationLevel: selected, zeroOption, drinkType: secSelected });
      }
    } else {
      onNext({ drinkType: selected! });
    }
  };

  return (
    <>
      <Form
        question={carbonation ? "어느 정도의 탄산을 선호하시나요?" : "어떤 종류의 음료를 선호하시나요?"}
        options={carbonation ? options : options}
        selected={selected}
        onSelect={(value) => {
          if (carbonation) {
            if (typeof value === "number") {
              setSelected(value);
            } else {
              setZeroOption(false);
            }
          } else {
            setSelected(value);
          }
        }}
      />
      {carbonation && (
        <>
          <Spacing size={40} />
          <Form
            question={"제로 슈거 옵션을 원하시나요?"}
            options={secOptions}
            selected={secSelected}
            onSelect={(value) => {
              if (value === 3) {
                setSecSelected(value);
                setZeroOption(true);
              } else {
                setSecSelected(value);
                setZeroOption(false);
              }
            }}
          />
        </>
      )}
      <NextButton disabled={selected === null || (carbonation && secSelected === null)} onNext={handleNext} />
    </>
  );
};

export default StepTwo;
