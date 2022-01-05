import styled from "styled-components";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import Grid from "../../StyledComponents/Grid";
import { colors, toRem } from "../../Helpers/utils";
import { icons } from "../../Helpers/icons";
import Tabs from "../../Components/Tabs";
import TabImage from "../../Images/tabs-image.png";

interface ContentProps {}

const HeaderWrapper = styled(Grid)`
   background: #c4c4c40d;
   border-radius: ${toRem(14)} ${toRem(14)} 0px 0px;
`;
const SubHeaderWrapper = styled(Flexbox)`
   background: #c4c4c41a;
`;
const OnlineCircle = styled(Flexbox)`
   background: ${colors.greenOnline};
   height: ${toRem(18)};
   width: ${toRem(18)};
   border-radius: 50%;
`;

const CardFooterWrapper = styled(Flexbox)`
   background-color: #0a070d80;
`;

const CardButton = styled(Flexbox)`
   background-color: #ffffffe5;
   padding: 1rem;
`;

const Content: React.FC<ContentProps> = () => {
   return (
      <Flexbox pb={52} column align="center" justify="start">
         <Flexbox style={{ width: toRem(560) }} column>
            <HeaderWrapper fullWidth gap="0.5rem" padding={toRem(14)} noOfColumns={2}>
               <Text color="white" size={32} style={{ fontWeight: 600 }}>
                  Future
               </Text>
               <Flexbox gap={6} justify="end">
                  <OnlineCircle></OnlineCircle>
                  <Text color="white" size={20}>
                     Online
                  </Text>
               </Flexbox>
               <Text color="#FFFFFFD9" size={20}>
                  @futurehendrixx
               </Text>
               <Flexbox gap={6} justify="end">
                  {icons.usaFlag}
                  <Text color="white" size={20}>
                     United States
                  </Text>
               </Flexbox>
            </HeaderWrapper>
            <SubHeaderWrapper fullWidth justify="center" gap={9} padding="0.25rem">
               <Flexbox mb={-7}>{icons.diamondBig}</Flexbox>
               <Text color="white" size={44}>
                  250
               </Text>
               <Text color="#FFFFFFE5" size={32}>
                  per second
               </Text>
            </SubHeaderWrapper>
            <Tabs
               images={[
                  TabImage,
                  "https://i.pinimg.com/736x/68/e0/c0/68e0c0dedbe91da254e2fd235d54abf6.jpg",
                  "https://images.unsplash.com/photo-1617966225168-276b58a35602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95JTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80s",
               ]}
            >
               <Flexbox fullWidth style={{ position: "absolute" }} fullHeight column justify="end">
                  <Flexbox fullWidth padding="0.75rem" justify="end">
                     <Flexbox gap={8} style={{ background: "#0A070D80", borderRadius: "0.5rem" }} padding="0.5rem">
                        {icons.userIcon}
                        <Text color="white" size={32}>
                           16
                        </Text>
                     </Flexbox>
                  </Flexbox>
                  <CardFooterWrapper padding={`1rem ${toRem(72)}`} column fullWidth>
                     <CardButton
                        style={{ borderRadius: toRem(10), cursor: "pointer" }}
                        justify="center"
                        gap={18}
                        fullWidth
                     >
                        {icons.webcamBlack}
                        <Text size={32}>Video Chat</Text>
                     </CardButton>
                     <Flexbox fullWidth justify="center" mt={9}>
                        <Text color="white" size={24}>
                           up to 142 seconds
                        </Text>
                     </Flexbox>
                  </CardFooterWrapper>
               </Flexbox>
            </Tabs>
         </Flexbox>
      </Flexbox>
   );
};

export default Content;
