import styled, { css } from "styled-components";
import { colors, toRem } from "../Helpers/utils";

export type FlexPos = "center" | "end" | "start" | "around" | "space-between" | "evenly";
interface FlexboxProps {
   column?: boolean;
   align?: FlexPos;
   justify?: FlexPos;
   gap?: string | number;
   fullWidth?: boolean;
   fullHeight?: boolean;
   padding?: string;
   margin?: string;
   background?: keyof typeof colors;
   pb?: number;
   pt?: number;
   pl?: number;
   pr?: number;

   gapMob?: string | number;
   mb?: number;
   mt?: number;
   ml?: number;
   mr?: number;
   overflowAuto?: boolean;
   noBorder?: boolean;
}

const flexPosObject: { [k in FlexPos]: string } = {
   "space-between": "space-between",
   around: "space-around",
   center: "center",
   end: "flex-end",
   start: "flex-start",
   evenly: "space-evenly",
};

export default styled.div<FlexboxProps>`
   ${(p) => flexbox(p)};
`;

export const flexbox = (p: FlexboxProps) => css`
   display: flex;
   flex-direction: ${p.column ? "column" : "row"};
   align-items: ${flexPosObject[p.align || (p.column ? "start" : "center")]};
   justify-content: ${flexPosObject[p.justify || "start"]};

   ${p.gap &&
   css`
      & > * {
         ${p.column
            ? css`
                 margin-bottom: ${typeof p.gap === "number" ? toRem(p.gap) : p.gap} !important;
              `
            : css`
                 margin-right: ${typeof p.gap === "number" ? toRem(p.gap) : p.gap} !important;
              `}
      }
      & > *:last-child {
         ${p.column
            ? css`
                 margin-bottom: 0 !important;
              `
            : css`
                 margin-right: 0 !important;
              `}
      }
   `}
   ${p.fullWidth && `width: 100%`};
   ${p.fullHeight && `height: 100%`};

   ${p.padding && `padding: ${p.padding}`};
   ${p.margin && `margin: ${p.margin}`};

   ${p.pb && `padding-bottom: ${toRem(p.pb)}`};
   ${p.pt && `padding-top: ${toRem(p.pt)}`};
   ${p.pl && `padding-left: ${toRem(p.pl)}`};
   ${p.pr && `padding-right: ${toRem(p.pr)}`};

   ${p.mb && `margin-bottom: ${toRem(p.mb)}`};
   ${p.mt && `margin-top: ${toRem(p.mt)}`};
   ${p.ml && `margin-left: ${toRem(p.ml)}`};
   ${p.mr && `margin-right: ${toRem(p.mr)}`};
   ${p.overflowAuto && `overflow: auto`};
   ${p.background && `background: ${colors[p.background]}`};
   ${p.noBorder && `border: none !important`};
   @media (max-width: 600px) {
      ${p.gap &&
      css`
         & > * {
            ${p.column
               ? css`
                    margin-bottom: ${typeof p.gapMob === "number" ? toRem(p.gapMob) : p.gapMob} !important;
                 `
               : css`
                    margin-right: ${typeof p.gapMob === "number" ? toRem(p.gapMob) : p.gapMob} !important;
                 `}
         }
         & > *:last-child {
            ${p.column
               ? css`
                    margin-bottom: 0 !important;
                 `
               : css`
                    margin-right: 0 !important;
                 `}
         }
      `}
   }
`;
