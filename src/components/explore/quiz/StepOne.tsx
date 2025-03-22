"use client";

import { useState } from "react";
import Form from "./Form";
import NextButton from "./NextButton";

const StepOne = ({ onNext }: { onNext: (values: { carbonation: boolean }) => void }) => {
  const [selected, setSelected] = useState<boolean | null>(null);

  return (
    <>
      <Form
        question="탄산이 포함된 음료를 선호하시나요?"
        options={[
          { label: "탄산음료가 좋아요", value: true }, // 탄산 O
          { label: "탄산 없는 주스나 스무디가 좋아요", value: false }, // 탄산 X
        ]}
        selected={selected}
        onSelect={setSelected}
      />
      <NextButton disabled={selected === null} onNext={() => selected !== null && onNext({ carbonation: selected })} />
    </>
  );
};

export default StepOne;
