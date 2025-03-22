"use client";

import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface FormProps {
  question: string;
  options: { label: string; value: number | boolean }[];
  selected: number | boolean | null;
  onSelect: (value: any) => void;
}

const Form = ({ question, options, selected, onSelect }: FormProps) => {
  return (
    <Container>
      <Question>{question}</Question>
      <OptionList>
        {options.map(({ label, value }) => (
          <OptionButton key={String(value)} isSelected={selected === value} onClick={() => onSelect(value)}>
            {label}
          </OptionButton>
        ))}
      </OptionList>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Question = styled.h2`
  font-size: 24px;
  color: ${colors.tertiary};
  text-align: center;
`;

const OptionList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

const OptionButton = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? colors.tertiary : colors.gray100)};
  color: ${({ isSelected }) => (isSelected ? colors.primary : colors.tertiary)};
  border-radius: 5px;
  border: none;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.gray50};
    color: ${colors.tertiary};
  }
`;
