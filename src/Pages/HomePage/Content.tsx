import styled from "styled-components";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import { colors, toRem } from "../../Helpers/utils";
import { icons } from "../../Helpers/icons";
import Tabs from "../../Components/Tabs";
import TabImage from "../../Images/tabs-image.png";
import { Box, Flex, HStack, Grid } from "@chakra-ui/react";

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
      <Flex pb={toRem(58)} width="100%" align="center" justify="center">
         <Grid width="fit-content" gridAutoFlow="column" gridTemplateColumns="auto auto" gridTemplateRows="auto auto">
            <Box>
               <Flex color="white" fontSize="1.5rem" justify="center">
                  You have up to 3 min, 29 sec
               </Flex>
               <Box ml="1rem" mb="0.28rem" color="#5FE55F" size="1.125rem">
                  Online
               </Box>
            </Box>
            <Flex>
               <Flex
                  mr={toRem(27)}
                  direction="column"
                  width={toRem(580)}
                  borderRadius="0.85rem"
                  border="1.5px solid #5FE55F"
               >
                  <Grid gridAutoFlow="columns" gridTemplateColumns="1.6fr 1fr">
                     <Box bg="#C4C4C40D" color="white" px="0.85rem" py="1.25rem">
                        <Box fontSize="2rem">Future&nbsp;{icons.tickCircled}</Box>
                        <Box fontSize="1.25rem">@futurehendrixx</Box>
                     </Box>
                     <HStack alignItems="center" justifyContent="center" bg="#C4C4C41A" color="white">
                        <Box mb={toRem(-10)}>{icons.diamondBig}</Box>
                        <Box display="inline-bloc" fontSize={toRem(44)}>
                           250
                           <Box fontSize="1.125rem" display="inline-block">
                              / sec
                           </Box>
                        </Box>
                     </HStack>
                  </Grid>
                  <Tabs
                     images={[
                        TabImage,
                        "https://i.pinimg.com/736x/68/e0/c0/68e0c0dedbe91da254e2fd235d54abf6.jpg",
                        "https://images.unsplash.com/photo-1617966225168-276b58a35602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95JTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80s",
                     ]}
                  >
                     <Flex position="absolute" width="100%" height="100%" direction="column" justify="end">
                        <Flex width="100%" justify="center">
                           <HStack
                              borderRadius="0.5rem"
                              borderBottomRadius={0}
                              spacing={toRem(10)}
                              bg="#0A070D80"
                              px="1.5rem"
                              py="1rem"
                           >
                              {icons.userIcon}
                              <Box color="white" fontSize={26}>
                                 16 in queue
                              </Box>
                           </HStack>
                        </Flex>
                        <Flex bg="#0A070D80" padding={`1rem ${toRem(72)}`} fullWidth>
                           <CardButton
                              style={{ borderRadius: toRem(10), cursor: "pointer" }}
                              justify="center"
                              gap={18}
                              fullWidth
                           >
                              {icons.webcamBlack}
                              <Text size={32}>Video Chat</Text>
                           </CardButton>
                        </Flex>
                     </Flex>
                  </Tabs>
               </Flex>
            </Flex>
            <div></div>
            <Grid height="fit-content" justifyItems="center" rowGap={toRem(60)}>
               {icons.moreVertical}
               {icons.featherShare}
               {icons.starOutlined}
            </Grid>
         </Grid>
      </Flex>
   );
};

export default Content;
