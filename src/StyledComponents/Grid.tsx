import styled, { css } from "styled-components";
import { toRem } from "../Helpers/utils";
import { FlexPos } from "./Flexbox";

interface GridProps {
   noOfColumns?: number;
   gap?: string;
   columns?: string;
   fullWidth?: boolean;
   padding?: string;
   align?: FlexPos;
   pb?: number;
   pt?: number;
   pl?: number;
   pr?: number;
   mb?: number;
   mt?: number;
   ml?: number;
   mr?: number;
   minHeight?: boolean;
   colGap?: string;
}

export const grid = (p: GridProps) => css`
   display: grid;
   gap: ${p.gap || ""};
   grid-template-columns: ${p.noOfColumns && `repeat(${p.noOfColumns}, 1fr)`};
   ${p.columns && `grid-template-columns: ${p.columns}`};
   ${!p.minHeight && `height: 100%`};
   ${p.fullWidth && `width: 100%`};
   ${p.padding && `padding: ${p.padding}`};

   ${p.pb && `padding-bottom: ${toRem(p.pb)}`};
   ${p.pt && `padding-top: ${toRem(p.pt)}`};
   ${p.pl && `padding-left: ${toRem(p.pl)}`};
   ${p.pr && `padding-right: ${toRem(p.pr)}`};

   ${p.mb && `margin-bottom: ${toRem(p.mb)}`};
   ${p.mt && `margin-top: ${toRem(p.mt)}`};
   ${p.ml && `margin-left: ${toRem(p.ml)}`};
   ${p.mr && `margin-right: ${toRem(p.mr)}`};
   ${p.align && `align-items: ${p.align}`};
   column-gap: ${p.colGap || ""};
`;

export default styled.div<GridProps>`
   ${(p) => grid(p)};
`;
