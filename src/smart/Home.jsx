import styled from "styled-components";
import IntroSection from "components/home/IntroSection";
import SecondSection from "components/home/SecondSection";
import StoryTellingSection from "components/home/StoryTellingSection";
import SpecialMenu from "components/home/SpecialMenu";
import MenuComponent from "components/menu/MenuComponent";
import ChefInfo from "components/home/ChefInfo";
import ReviewSection from "components/home/ReviewSection";
import ContactSection from "components/home/ContactSection";
import { foodMenu, menuTypes } from "data/menu";
import { strengthData, contactDetails } from "data/common";
import { staffs } from "data/personal";

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
        <ChefInfo staffsData={staffs} strengthData={strengthData} />
      </div>
      <div className="other-section">
        <ReviewSection />
      </div>
      <div className="other-section">
        <ContactSection contactDetails={contactDetails} />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.home {
  }
`;

export default Home;
