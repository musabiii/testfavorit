import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changePage } from "../redux/actions";
import { pages } from "../types/types";

const MenuBlock = styled.div`
  font-size: 20px;
  border: #eee 1px solid;
  flex: 1 1 5%;
  &.expand {
    flex: 1 1 25%;
    .menu-title {
      display: initial;
    }
  }

  .menu-item {
    padding: 10px;
    border: #eee 1px solid;
    text-align: left;
    cursor: pointer;
  }

  .menu-item:hover {
      background-color: #9acad3;
  }
  .menu-title {
    display: none;
    margin-left: 10px;
  }

  .logo {
    font-size: 24px;
padding: 10px;
  }
  :hover {
    flex: 1 1 25%;
    .menu-title {
      display: initial;
    }
  }
`;

interface menuProps {
  changePage: Function;
}

const Menu: React.FC<menuProps> = ({ changePage }) => {
  return (
    <MenuBlock className="expand1">
      <div className="logo">
        <i className="fas fa-laptop-code"></i>
        <span className="menu-title">COMPANY</span>
      </div>
      <div className="menu-item" onClick={() => changePage(pages.main)}>
        <i className="fas fa-home"></i>
        <span className="menu-title">Главная</span>
      </div>

      <div className="menu-item" onClick={() => changePage(pages.customers)}>
        <i className="fas fa-shopping-cart"></i>
        <span className="menu-title">Клиенты</span>
      </div>
      <div className="menu-item" onClick={() => changePage(pages.employees)}>
        <i className="fas fa-users"></i>
        <span className="menu-title">Сотрудники</span>
      </div>
      <div className="menu-item" onClick={() => changePage(pages.analytics)}>
        <i className="fas fa-chart-pie"></i>
        <span className="menu-title">Аналитика</span>
      </div>
    </MenuBlock>
  );
};

const mapDispatchToProps = {
  changePage,
};

export default connect(null, mapDispatchToProps)(Menu);
