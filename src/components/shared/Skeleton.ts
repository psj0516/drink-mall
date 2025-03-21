import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "@styles/colorPalette";

const opacity = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 1;
    }
`;

const Skeleton = styled.div<{
  width: string | number;
  height: string | number;
}>(({ width, height }) => {
  const mobileWidth = typeof width === "number" ? `${(width * 2) / 3}px` : width;
  const mobileHeight = typeof height === "number" ? `${(height * 2) / 3}px` : height;

  return {
    width,
    height,
    backgroundColor: colors.gray100,
    animation: `${opacity} 2s ease-in-out 0.5s infinite`,
    "@media (max-width: 480px)": {
      width: mobileWidth,
      height: mobileHeight,
    },
  };
});

export default Skeleton;

/**
 * <Skeleton> 컴포넌트
 * - 로딩 중에 UI의 자리 차지(스켈레톤 UI)
 *
 * <Skeleton width="100px" height="20px" />
 */
