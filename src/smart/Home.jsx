import React, { useCallback } from "react";
import { useState } from "react";
import styled from "styled-components";
import IntroSection from "components/home/IntroSection";
import SecondSection from "components/home/SecondSection";
import StoryTellingSection from "components/home/StoryTellingSection";
import SpecialMenu from "components/home/SpecialMenu";
import MenuComponent from "components/menu/MenuComponent";
import ChefInfo from "components/home/ChefInfo";
// import ReviewSection from "components/home/ReviewSection";
import ContactSection from "components/home/ContactSection";
import { menuDetails, menuTypes, showMenuTypes } from "data/menu";
import { strengthData, contactDetails } from "data/common";
import { staffs } from "data/personal";
import { smoothScroll } from "services/common.services";
import AwardLogo from "components/home/AwardLogo";
import { Helmet } from "react-helmet";

const IntroSectionMemo = React.memo(IntroSection);
const SecondSectionMemo = React.memo(SecondSection);
const SpecialMenuMemo = React.memo(SpecialMenu);
const ChefInfoMemo = React.memo(ChefInfo);
const StoryTellingSectionMemo = React.memo(StoryTellingSection);
// const ReviewSectionMemo = React.memo(ReviewSection);
const ContactSectionMemo = React.memo(ContactSection);

const Home = () => {
  const [displayMenu, setDisplayMenu] = useState(menuDetails);
  const [isSelectedType, setSelectedType] = useState("all");

  const handleChangeMenu = useCallback((inputType) => {
    let result = [];
    if (inputType !== "all") {
      result = menuDetails.filter((item) => item.type === inputType);
    } else {
      result = menuDetails;
    }
    setSelectedType(inputType);
    setDisplayMenu(result);
  }, []);
  const handleChangeMenuType = useCallback((type) => {
    handleChangeMenu(type);
    smoothScroll("menu-section");
    // eslint-disable-next-line
  }, []);
  return (
    <StyledDiv className="home">
       <Helmet>
          <script
            src="https://www.fbgcdn.com/embedder/js/ewm2.js"
            defer
            async
          ></script>
        </Helmet>
      <div className="first-section">
        <IntroSectionMemo className="intro-section" />
      </div>
      <div className="award-section">
        <h1 className=" header-text">Award by</h1>
        <div className="logo">
          <AwardLogo />
        </div>
      </div>
      <div className="other-section">
        <SecondSectionMemo
          menuTypes={menuTypes}
          handleChange={handleChangeMenuType}
        />
      </div>
      <div className="other-section">
        <SpecialMenuMemo />
      </div>
      <div className="other-section">
        <StoryTellingSectionMemo />
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
        <ChefInfoMemo staffsData={staffs} strengthData={strengthData} />
      </div>
      {/* <div className="other-section">
        <ReviewSectionMemo />
      </div> */}
      <div id="contact-section" className="other-section">
        <ContactSectionMemo contactDetails={contactDetails} />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.home {
    .award-section {
      padding-top: 15px;
      padding-bottom: 25px;
      width: 100%;
      background-color: #121111;
      .logo {
        display: flex;
        justify-content: center;
      }
      h1 {
        text-align: center;
        margin-top: 0px;
      }
    }
  }
`;

export default Home;
