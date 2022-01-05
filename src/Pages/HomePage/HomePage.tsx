import styled from "styled-components";
import { toRem } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Content from "./Content";
import Header from "./Header";

interface HomePageProps {}

const PageWrapper = styled.div`
   background: linear-gradient(151.05deg, #201727 -1.98%, #0a070c 42.25%);
   display: flex;
   flex-direction: column;
   min-height: 100%;

   width: 100%;
`;

const HomePage: React.FC<HomePageProps> = () => {
   return (
      <PageWrapper>
         <Header></Header>
         <Content></Content>
      </PageWrapper>
   );
};

export default HomePage;
