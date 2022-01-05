import { createStyles, Icon, makeStyles, TextField } from "@material-ui/core";
import styled from "styled-components";
import { icons } from "../../Helpers/icons";
import { toRem } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import navbarImage from "../../Images/navbar-boy.png";
interface HeaderProps {}

const useStyles = makeStyles((theme) => ({
   searchInput: { "&::placeholder": { color: "white" }, color: "white" },
}));

const SearchInputWrapper = styled(Flexbox)`
   border-bottom: 1px solid #ffffff80;
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
   const styles = useStyles();
   return (
      <Flexbox margin={`${toRem(50)}`} justify="space-between">
         <Flexbox gap={78} gapMob={20}>
            {icons.webcam}
            <SearchInputWrapper pb={6} gap={6}>
               {icons.search}
               <input style={{ width: toRem(174) }} placeholder="search"></input>
            </SearchInputWrapper>
         </Flexbox>
         <Flexbox gap={28}>
            <Badge align="center" gap={9} padding={toRem(13)}>
               <div style={{ marginBottom: "-0.75rem" }}>{icons.diamond}</div>
               <Text size={32} color="white">
                  35,651
               </Text>
            </Badge>

            <RoundImage src={navbarImage}></RoundImage>
         </Flexbox>
      </Flexbox>
   );
};

export default Header;
