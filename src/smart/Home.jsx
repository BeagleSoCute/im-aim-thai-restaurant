import styled from "styled-components";
import IntroSection from "components/home/IntroSection";
import SecondSection from "components/home/SecondSection";
import StoryTellingSection from "components/home/StoryTellingSection";
import SpecialMenu from "components/home/SpecialMenu";
import MenuComponent from "components/menu/MenuComponent";
import ChefInfo from "components/home/ChefInfo";
import { foodMenu, menuTypes } from "data/menu";
import {strengthData} from "data/common";

const Home = () => {
  return (
    <StyledDiv clssName="home">
      <div className="first-section">
        <IntroSection clssName="intro-section " />
      </div>
      <div className="other-section">
        <SecondSection />
      </div>
      <div className="other-section">
        <SpecialMenu />
      </div>
      <div className="other-section">
        <StoryTellingSection />
      </div>
      <div className="other-section">
        <MenuComponent foodData={foodMenu} types={menuTypes} />
      </div>
      <div className="other-section">
        <ChefInfo strengthData={strengthData} />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.home {
  }
`;

export default Home;
