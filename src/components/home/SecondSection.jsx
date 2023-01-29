import styled from "styled-components";
import CardMenu from "components/common/CardMenu";
import { Row, Col } from "antd";
import soup from "assets/menu_types/tom_yum.jpg";
import curry from "assets/menu_types/green_curry.jpg";
import wok from "assets/menu_types/wok.jpg";
import sizzling from "assets/menu_types/sizzling.jpg";
import riceandNoodle from "assets/menu_types/pad_thai.jpg";
import springRoll from "assets/menu_types/sprint_roll.jpg";
import thaiSalad from "assets//menu_types/thai_salad.jpg";
import icecream from "assets//menu_types/icecream.jpg";

const menuTpes = [
  {
    key: 1,
    title: "Soup",
    picPath: soup,
    redirectPath: "",
  },
  {
    key: 2,
    title: "Curry",
    picPath: curry,
    redirectPath: "",
  },
  {
    key: 3,
    title: "Wok",
    picPath: wok,
    redirectPath: "",
  },
  {
    key: 4,
    title: "Thai Salad",
    picPath: thaiSalad,
    redirectPath: "",
  },
  {
    key: 5,
    title: "Sizzling",
    picPath: sizzling,
    redirectPath: "",
  },
  {
    key: 6,
    title: "Rice and Noodle",
    picPath: riceandNoodle,
    redirectPath: "",
  },
  {
    key: 7,
    title: "Appetisers",
    picPath: springRoll,
    redirectPath: "",
  },
  {
    key: 8,
    title: "Dessert",
    picPath: icecream,
    redirectPath: "",
  },
];

const SecondSection = () => {
  return (
    <StyledDiv className="second-section">
      <div className="mini-title"> SPECIAL THAI FOOD</div>
      <div className="content-wrapper header-text">Menu</div>
      <div className="content-wrapper normal-text">
        Select the menu that you like.
      </div>
      <Row gutter={[30, 30]} justify={"center"}>
        {menuTpes.map((item) => (
          <Col key={item.key} span={6}>
            <CardMenu
              title={item.title}
              picPath={item.picPath}
              redirectPath={item.redirectPath}
            />
          </Col>
        ))}
      </Row>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.second-section {
    min-height: 100vh;
    background-color: #100e09;
    padding: 50px;
    color: white;
    .content-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .header-text {
      font-size: 35px;
    }
    .normal-text {
      font-size: 18px;
    }
    .mini-title{
      text-align: center;
    }
  }
`;
export default SecondSection;
