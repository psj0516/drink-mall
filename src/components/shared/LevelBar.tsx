import { Colors, colors } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface LevelBarProps {
  level: number; // 0~5 까지
  maxLevel: number;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  color?: Colors;
  subColor?: Colors;
}

interface LevelBlockProps {
  isActive: boolean;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  color: Colors;
  subColor: Colors;
}

const LevelBar = ({ level, color = "tertiary", subColor = "gray50", maxLevel, width = "60px", height = "30px" }: LevelBarProps) => {
  const validLevel = Math.max(0, Math.min(level, maxLevel));

  return (
    <BarContainer>
      {[...Array(maxLevel)].map((_, index) => (
        <LevelBlock key={index} isActive={index < validLevel} width={width} height={height} color={color} subColor={subColor} />
      ))}
    </BarContainer>
  );
};

export default LevelBar;

const BarContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const getResponsiveSize = (size: CSSProperties["width"]) => {
  if (typeof size === "string" && size.includes("px")) {
    return `${parseFloat(size) / 1.5}px`;
  }
  return size;
};

const LevelBlock = styled.div<LevelBlockProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ isActive, color, subColor }) => (isActive ? colors[color] : colors[subColor])};
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 480px) {
    width: ${({ width }) => getResponsiveSize(width)};
    height: ${({ height }) => getResponsiveSize(height)};
  }
`;


/**
 * <LevelBar> 컴포넌트
 * - 레벨 표시 바
 * - 최대 `maxLevel` 개의 블록
 * - `level` 값에 따라 활성화된 블록 표시
 * - `color`, `subColor`로 활성/비활성 블록 색상을 조정 가능
 * - 모바일 환경(max-width: 480px)에서 크기 조절됨
 * 
 * <LevelBar level={2} maxLevel={5} color="primary" subColor="gray100" width="80px" height="20px" />
 */
