import { connect } from "react-redux";
import { personType, stateTypes } from "../types/types";

interface analitycsProps {
  employees: personType[];
  customers: personType[];
}

const Analitycs: React.FC<analitycsProps> = ({ employees, customers }) => {
  return (
    <>
      <h2>Сотрудников:{employees.length}</h2>
      <h2>Клиентов:{customers.length}</h2>
    </>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    employees: state.employees,
    customers: state.customers,
  };
};

export default connect(mapStateToProps)(Analitycs);
