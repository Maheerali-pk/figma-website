import { createStyles, Icon, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";
import { icons } from "../../Helpers/icons";
import { toRem } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import navbarImage from "../../Images/navbar-boy.png";
import { Box, Flex, Grid, HStack, Image, Input, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react";
interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
   searchInput: { "&::placeholder": { color: "white" }, color: "white" },
}));

const SearchInputWrapper = styled(HStack)`
   /* border-bottom: 1px solid #ffffff80; */
   input:focus,
   input:active,
   input {
      outline: none;
      border: none;
      color: #ffffffb2;
      background: transparent;
      font-size: ${toRem(22)};
   }
   input::placeholder {
      color: #ffffffb2;
   }
`;

const Badge = styled(Flexbox)`
   border: 1px solid #ffffff80;
   border-radius: ${toRem(10)};
`;

const RoundImage = styled.img`
   height: ${toRem(72)};
   width: ${toRem(72)};
   border-radius: 50%;
   object-fit: cover;
`;

const Header: React.FC<HeaderProps> = () => {
   return (
      <Flex margin={`${toRem(50)}`}>
         <Flexbox gap={78} gapMob={20}>
            {icons.webcam}
            <SearchInputWrapper pb="0.5rem" borderBottom="1px solid #FFFFFF80" spacing="0.4rem">
               {icons.search}
               <Input bg="transparent" width={toRem(174)} placeholder="search" />
            </SearchInputWrapper>
         </Flexbox>
         <Spacer></Spacer>
         <HStack spacing={toRem(28)}>
            <Flex>
               <HStack
                  bg="#C4C4C41A"
                  p={toRem(13)}
                  borderRadius={toRem(10)}
                  borderRightRadius={0}
                  alignItems="center"
                  spacing={toRem(9)}
               >
                  <Box mb="-0.75rem">{icons.diamond}</Box>
                  <Box fontSize={toRem(26)} color="white">
                     35,657
                  </Box>
               </HStack>
               <Box
                  p={toRem(13)}
                  borderRadius={toRem(10)}
                  alignItems="center"
                  bg="#C4C4C40D"
                  color="white"
                  borderLeftRadius={0}
                  fontSize={toRem(26)}
               >
                  $ 35.66
               </Box>
            </Flex>
            <Image src={navbarImage} height={toRem(72)} width={toRem(72)} borderRadius="50%"></Image>
         </HStack>
      </Flex>
   );
};

export default Header;
