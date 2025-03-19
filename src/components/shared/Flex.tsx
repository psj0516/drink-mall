import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface FlexProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
}

const Flex = styled.div<FlexProps>(({ align, justify, direction }) => ({
  display: "flex",
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
}));

export default Flex;

/** 
  * <Flex> 컴포넌트
  * - Flex 레이아웃 적용 시 사용
  * - 기본 flex-direction은 "column"으로 설정되어 있음
  * 
  * <Flex align="center" justify="space-between" direction="row">
  *  <div>Item 1</div>
  *  <div>Item 2</div>
  * </Flex>
 */