import { connect } from "react-redux";
import styled from "styled-components";
import { pages, personType, stateTypes } from "../types/types";
import Analitycs from "./analitycs";
import Persons from "./persons";

const BlockMainContent = styled.div`
  border: #eee solid 1px;
  padding: 10px;
`;

interface mainContentProps {
  currentPage: String;
  customers: personType[];
  employees: personType[];
}

const MainContent: React.FC<mainContentProps> = ({ currentPage,customers,employees }) => {
    const currentBlock:any = 'd';
  if (currentPage === pages.customers) {
    return <Persons persons={customers} />;

  }

  if (currentPage === pages.main) {
    return <BlockMainContent>Добро пожаловать!</BlockMainContent>;
  }

  if (currentPage === pages.employees) {
    return <Persons persons={employees} />;
  }

  return <BlockMainContent><Analitycs/></BlockMainContent>;
};

const mapStateToProps = (state: stateTypes) => {
  return {
    employees: state.employees,
    customers: state.customers,
    currentPage: state.currentPage,
  };
};

export default connect(mapStateToProps)(MainContent);
