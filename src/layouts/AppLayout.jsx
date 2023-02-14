import { useContext } from "react";
import styled from "styled-components";
import { Layout, Menu, Spin, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "contexts/app.context";
import { checkIsAuth } from "helpers/auth.helper";
import { Outlet } from "react-router-dom";
import logo from "assets/common/logo.png";

const { Header } = Layout;

const authenMenu = [
  { key: 1, label: "Home", path: "/" },
  { key: 2, label: "Menu", path: "/menu" },
  { key: 3, label: "Contact Us", path: "/contact" },
  // { key: 2, label: "Dashboard", path: "/dashboard" },
  // { key: 3, label: "Profile", path: "/profile" },
  // { key: 4, label: "Logout", path: "/logout" },
];
const notAuthenMenu = [
  { key: 1, label: "Home", path: "/" },
  { key: 2, label: "Menu", path: "/menu" },
  { key: 3, label: "Contact Us", path: "/contact" },
  // { key: 6, label: "Dashboard", path: "/dashboard" },
  // { key: 7, label: "Login", path: "/login" },
  // { key: 8, label: "Register", path: "/register" },
];

const AppLayout = () => {
  const { loading } = useContext(AppContext);
  const isAuth = checkIsAuth();
  const navigate = useNavigate();
  const handleOnClick = (selected) => {
    const menus = isAuth ? authenMenu : notAuthenMenu;
    const result = menus.find((menu) => menu.key === parseInt(selected.key));
    navigate(result.path);
  };

  return (
    <StyledLayout className="app-layout ">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Row className="wrapper">
          <Col xs={10} sm={6} md={4} xl={2} className="logo-wrapper">
            <img src={logo} alt="logo" />
          </Col>
          <Col xs={14} sm={18} md={20} xl={22} className="menu-links">
            <Menu
              theme="blacks"
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              onClick={handleOnClick}
              items={isAuth ? authenMenu : notAuthenMenu}
            />
          </Col>
        </Row>
      </Header>
      <div className="content">
        {loading ? (
          <div className="spin">
            <Spin size="large">{loading}</Spin>
          </div>
        ) : (
          <>
            <Outlet />
          </>
        )}
        <div className="footer">
          <p>
            © 2023 IM-AIM Thai Restaurt. All Rights Reserved | Developed by
            Tanawat Limsakul
          </p>
        </div>
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  &.app-layout {
    height: 100%;
    .content {
      height: 100%;
    }
    .spin {
      display: flex;
      justify-content: center;
      height: 100%;
    }
    .ant-spin {
      margin: auto;
    }
    .wrapper {
      height: 100% !important;
    }
    .logo-wrapper {
      height: 100% !important;
      img {
        width: 100%;
        height: 100%;
      }
    }
    li {
      color: white;
    }
    .footer {
      display: flex;
      justify-content: center;
      height: 50px;
      background-color: black;
      align-items: center;
      text-align: center;
      p {
        margin: auto 0px;
      }
    }
    /* styles for smartphone screens in portrait orientation */
    @media only screen and (max-width: 480px) {
      .logo-wrapper {
        height: 100% !important;
      }
      .footer {
        height: 80px;
      }
    }
  }
`;
export default AppLayout;
