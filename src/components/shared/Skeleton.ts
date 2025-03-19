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
}>(({ width, height }) => ({
  width,
  height,
  backgroundColor: colors.gray100,
  animation: `${opacity} 2s ease-in-out 0.5s infinite`,
}));

export default Skeleton;


/**
 * <Skeleton> 컴포넌트
 * - 로딩 중에 UI의 자리 차지(스켈레톤 UI)
 * 
 * <Skeleton width="100px" height="20px" />
 */
