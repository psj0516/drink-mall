import styled from "@emotion/styled";
import { colors, Colors } from "@styles/colorPalette";

interface SpacingProps {
  size: number;
  direction?: "vertical" | "horizontal";
  backgroundColor?: Colors;
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = "vertical" }) =>
    direction === "vertical"
      ? `
        height: ${size}px;
      `
      : `
        width: ${size}px;
      `}

  ${({ backgroundColor }) => backgroundColor && `background-color: ${colors[backgroundColor]};`}

    @media (max-width: 480px) {
    ${({ size, direction = "vertical" }) => (direction === "vertical" ? `height: ${size / 2}px;` : `width: ${size / 2}px;`)}
  }
`;

export default Spacing;

/**
 * <Spacing> 컴포넌트
 * - 요소 사이 공백 추가
 * - `direction`에 따라 세로(`height`) 또는 가로(`width`) 간격 조정
 * - 모바일 환경(max-width: 480px)에서 크기 절반으로 적용됨
 * - `backgroundColor` 설정 시 구분선으로 사용
 * 
 * <Spacing size={20} />
 * <Spacing size={40} direction="horizontal" backgroundColor="gray500" />
 */