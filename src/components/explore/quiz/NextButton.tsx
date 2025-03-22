import Spacing from "@shared/Spacing";
import { colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface NextButtonProps {
  disabled: boolean;
  onNext: () => void;
}

const NextButton = ({ disabled, onNext }: NextButtonProps) => {
  return (
    <>
      <Spacing size={20} />
      <Button disabled={disabled} onClick={!disabled ? onNext : undefined}>
        다음
      </Button>
    </>
  );
};

export default NextButton;

const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${colors.redOrange};
  color: ${colors.primary};
  border-radius: 5px;
  border: none;
  margin: 0 0 0 auto;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
