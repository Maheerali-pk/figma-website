import { Tab } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
interface TabsProps {
   images: string[];
}

const TabBar = styled.div<{ active?: boolean }>`
   width: 100%;
   height: ${toRem(7)};
   background-color: ${(p) => (p.active ? "#0A070CB2" : "#0A070C4D")};
   border-radius: ${toRem(100)};
   cursor: pointer;
`;
const TabBarsWrapper = styled(Flexbox)`
   position: absolute;
   top: 0.3rem;
   z-index: 1;
`;

const Tabs: React.FC<TabsProps> = ({ children, images }) => {
   const [index, setIndex] = useState(0);
   return (
      <Flexbox fullWidth style={{ position: "relative" }}>
         <img style={{ height: "100%", width: "100%" }} src={images[index]} alt="pic" />
         <TabBarsWrapper fullWidth padding="0.3rem 1rem" gap={12}>
            {images.map((x, i) => (
               <TabBar onClick={() => setIndex(i)} active={index === i}></TabBar>
            ))}
         </TabBarsWrapper>
         {children}
      </Flexbox>
   );
};

export default Tabs;
