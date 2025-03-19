import { css } from "@emotion/react";

export const typographyMap = {
  t1: css`
    font-size: 48px;
    line-height: 1.35;

    @media (max-width: 480px) {
      font-size: 36px;
      line-height: 1.35;
    }
  `,
  t2: css`
    font-size: 40px;
    line-height: 1.34;

    @media (max-width: 480px) {
      font-size: 32px;
      line-height: 1.3;
    }
  `,
  t3: css`
    font-size: 36px;
    line-height: 1.4;

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.3;
    }
  `,
  t4: css`
    font-size: 32px;
    line-height: 1.45;

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 1.2;
    }
  `,
  t5: css`
    font-size: 24px;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 1.2;
    }
  `,
  t6: css`
    font-size: 20px;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.2;
    }
  `,
  t7: css`
    font-size: 16px;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 1.2;
    }
  `,
  t8: css`
    font-size: 14px;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 8px;
      line-height: 1.2;
    }
  `,
};

export type Typography = keyof typeof typographyMap;
