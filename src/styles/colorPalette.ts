import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --primary: #fffbf7;
    --secondary: #494643;
    --tertiary: #3d3a37;
    --mint: #00c9af;
    --darkMint: #007562;
    --peach: #ffc0b7;
    --drakPeach: #ff8982;
    --redOrange: #c25450;
    --gray50: rgba(73, 70, 67, 0.47);
    --gray100: rgba(58, 58, 58, 0.1);
    --black: #000000;
  }
`;

export const colors = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  tertiary: "var(--tertiary)",
  mint: "var(--mint)",
  darkMint: "var(--darkMint)",
  peach: "var(--peach)",
  drakPeach: "var(--drakPeach)",
  redOrange: "var(--redOrange)",
  gray50: "var(--gray50)",
  gray100: "var(--gray100)",
  black: "var(--black)",
};

export type Colors = keyof typeof colors;
