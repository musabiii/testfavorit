import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  filterDateFrom,
  filterDateTill,
  filterName,
  filterTel,
} from "../redux/actions";
import { filterType, stateTypes } from "../types/types";

const FilterBlock = styled.div`
font-size: 16px;
border: 1px #eee solid;
  form {
    display: none;
  }
  &.expand {
    form {
      display: initial;
    }
  }
  .form-line {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .btn-expand {
    cursor: pointer;
    :hover {
        color: #3dc2c7;
    }
  }
`;

interface filterProps extends filterType {
  filterDateFrom: Function;
  filterDateTill: Function;
  filterName: Function;
  filterTel: Function;
}

const Filter: React.FC<filterProps> = ({ dateTill, dateFrom, name, tel,filterDateFrom,filterDateTill,filterName,filterTel }) => {
  const [expand, setExpand] = useState("");

  const handleExpand = () => {
    setExpand((prev) => {
      return prev === "" ? "expand" : "";
    });
  };

  return (
    <FilterBlock className={expand}>
      <div className="filter-header">
        <div className="filter-title">Фильтр</div>
        <a className="btn-expand" onClick={handleExpand}>
          <i className="fas fa-cog"></i>
        </a>
      </div>
      <form>
        <div className="form-line">
          <input type="date" placeholder="Дата от" onChange={(e)=>filterDateFrom(e.target.value)}/>
          <input type="date" placeholder="Дата до" onChange={(e)=>filterDateTill(e.target.value)}/>
        </div>

        <div className="form-line">
          <input type="text" placeholder="Имя клиента" value={name} onChange={e=>filterName(e.target.value)}/>
          <input type="tel" placeholder="Телефон" value={tel} onChange={e=>filterTel(e.target.value)}/>
        </div>
      </form>
    </FilterBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    dateFrom: state.filter.dateFrom,
    dateTill: state.filter.dateTill,
    name: state.filter.name,
    tel: state.filter.tel,
  };
};

const mapDispatchToProps = {
  filterDateFrom,
  filterDateTill,
  filterName,
  filterTel,
};
export default connect(mapStateToProps,mapDispatchToProps)(Filter);
