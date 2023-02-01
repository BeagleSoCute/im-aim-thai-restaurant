import { useState } from "react";
import MenuComponent from "components/menu/MenuComponent";
import { menuDetails, showMenuTypes } from "data/menu";
import styled from "styled-components";

const AllMenu = () => {
  const [displayMenu, setDisplayMenu] = useState(menuDetails);
  const [isSelectedType, setSelectedType] = useState("all");
  const handleChangeMenu = (inputType) => {
    let result = [];
    if (inputType !== "all") {
      result = menuDetails.filter((item) => item.type === inputType);
    } else {
      result = menuDetails;
    }
    setSelectedType(inputType);
    setDisplayMenu(result);
  };
  return (
    <StyledDiv className="all-menu">
      <MenuComponent
        displayMenu={displayMenu}
        types={showMenuTypes}
        isSelectedType={isSelectedType}
        handleChange={handleChangeMenu}
      />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.all-menu {
   
  }
`;
export default AllMenu;
