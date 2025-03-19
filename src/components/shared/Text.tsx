import { CSSProperties } from "react";
import { colors, Colors } from "@styles/colorPalette";
import { Typography, typographyMap } from "@styles/typography";

import styled from "@emotion/styled";

interface TextProps {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  fontFamily?: CSSProperties["fontFamily"];
  bold?: boolean;
}

const Text = styled.span<TextProps>(
  ({ color = colors.primary, display, textAlign, fontFamily, fontWeight, bold }) => ({
    color: colors[color as keyof typeof colors],
    display,
    textAlign,
    fontFamily: fontFamily,
    fontWeight: bold ? "bold" : fontWeight,
  }),
  ({ typography = "t5" }) => typographyMap[typography]
);

export default Text;

/**
 * <Text> 컴포넌트
 * - 일관된 텍스트 스타일 위해 사용
 * - <span> 태그 역할 수행
 * 
 * <Text typography="t3" textAlign="center" color="secondary" bold>
 *    한 줄짜리 텍스트
 * </Text>
 */