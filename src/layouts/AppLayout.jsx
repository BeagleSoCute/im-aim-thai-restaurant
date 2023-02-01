import { useContext } from "react";
import styled from "styled-components";
import { Layout, Menu, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "contexts/app.context";
import { checkIsAuth } from "helpers/auth.helper";
import { Outlet } from "react-router-dom";

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
    <StyledLayout className="app-layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          onClick={handleOnClick}
          items={isAuth ? authenMenu : notAuthenMenu}
        />
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
    .header {
      background: #282a3a;
      .link {
        color: white;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      height: 50px;
      background-color: black;
      p {
        margin: auto 0px;
      }
    }
  }
`;
export default AppLayout;
