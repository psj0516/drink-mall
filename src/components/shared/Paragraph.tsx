import { CSSProperties } from "react";
import { colors, Colors } from "@styles/colorPalette";
import { Typography, typographyMap } from "@styles/typography";

import styled from "@emotion/styled";

interface ParagraphProps {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  bold?: boolean;
}

const Paragraph = styled.p<ParagraphProps>(
  ({ color = "black", display, textAlign, fontWeight, bold }) => ({
    color: colors[color as keyof typeof colors],
    display,
    textAlign,
    fontWeight: bold ? "bold" : fontWeight,
  }),
  ({ typography = "t5" }) => typographyMap[typography]
);

export default Paragraph;

/**
 * <Paragraph> 컴포넌트
 * - 일관된 텍스트 스타일 위해 사용
 * - <p> 태그 역할 수행
 * 
 * <Paragraph typography="t3" textAlign="center" color="secondary" bold>
 *    여러 줄 텍스트
 *    <br />
 *    작성 가능
 * </Paragraph>
 */