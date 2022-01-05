import styled, { css } from "styled-components";
import { toRem } from "../Helpers/utils";

interface RoundImageProps {
   size?: number;
}

export default styled.img<RoundImageProps>`
   ${(p) => roundImage(p)};
`;

const roundImage = (p: RoundImageProps) => css`
   height: ${toRem(p.size || 24)};
   width: ${toRem(p.size || 24)};
   border-radius: 50%;
`;
