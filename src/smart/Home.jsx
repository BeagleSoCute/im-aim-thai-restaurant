import { useState } from "react";
import styled from "styled-components";
import IntroSection from "components/home/IntroSection";
import SecondSection from "components/home/SecondSection";
import StoryTellingSection from "components/home/StoryTellingSection";
import SpecialMenu from "components/home/SpecialMenu";
import MenuComponent from "components/menu/MenuComponent";
import ChefInfo from "components/home/ChefInfo";
import ReviewSection from "components/home/ReviewSection";
import ContactSection from "components/home/ContactSection";
import { foodMenu, menuTypes, showMenuTypes } from "data/menu";
import { strengthData, contactDetails } from "data/common";
import { staffs } from "data/personal";

const Home = () => {
  const [displayMenu, setDisplayMenu] = useState(foodMenu);
  const [isSelectedType, setSelectedType] = useState("all");
  const handleChangeMenuType = (type) => {
    handleChangeMenu(type);
    const element = document.getElementById("menu-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleChangeMenu = (inputType) => {
    let result = [];
    if (inputType !== "all") {
      result = foodMenu.filter((item) => item.type === inputType);
    } else {
      result = foodMenu;
    }
    setSelectedType(inputType);
    setDisplayMenu(result);
  };
  return (
    <StyledDiv clssName="home">
      <div className="first-section">
        <IntroSection clssName="intro-section" />
      </div>
      <div className="other-section">
        <SecondSection menuTypes={menuTypes} handleChange={handleChangeMenuType} />
      </div>
      <div className="other-section">
        <SpecialMenu />
      </div>
      <div className="other-section">
        <StoryTellingSection />
      </div>
      <div id="menu-section" className="other-section">
        <MenuComponent
          displayMenu={displayMenu}
          types={showMenuTypes}
          isSelectedType={isSelectedType}
          handleChange={handleChangeMenu}
        />
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
