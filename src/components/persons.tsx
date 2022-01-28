import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filterType, personType, stateTypes } from "../types/types";

const PersonBlock = styled.div`
  font-size: 20px;
  background-color: #fff;
  overflow-y: scroll;
  flex: 1 1 100%;
  .person-item {
    padding: 10px;
    span {
      font-weight: 600;
    }
  }
`;

interface personProps {
  filter: filterType;
  persons: personType[];
}

const Persons: React.FC<personProps> = ({ filter, persons }) => {
  persons = filterName(persons, filter.name);
  persons = filterTel(persons, filter.tel);
  persons = filterDateFrom(persons, filter.dateFrom);
  persons = filterDateTill(persons, filter.dateTill);

  return (
    <PersonBlock>
      {persons.map((el) => {
        return (
          <div className="person-item" key={el.id}>
            <span>Имя:</span>  {el.name}<span>. Телефон:</span> {el.tel}<span>. Дата приема: </span>{el.date}
          </div>
        );
      })}
    </PersonBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    employees: state.employees,
    filter: state.filter,
    customers: state.customers,
  };
};

export default connect(mapStateToProps)(Persons);

function filterName(list: personType[], filterName: string): personType[] {
  if (filterName === "") {
    return list;
  }
  console.log(filterName);
  console.log("list", list);
  return list.filter((el) => el.name.indexOf(filterName) >= 0);
}

function filterTel(list: personType[], filterTel: string): personType[] {
  if (filterTel === "") {
    return list;
  }

  return list.filter((el) => el.tel.indexOf(filterTel) >= 0);
}

function filterDateFrom(
  list: personType[],
  filterDateFrom: string
): personType[] {
  if (filterDateFrom === "") {
    return list;
  }

  return list.filter((el) => {
    const day = filterDateFrom.substring(8, 10);
    const month = filterDateFrom.substring(5, 7);
    const year = filterDateFrom.substring(0, 4);

    const fDate = new Date(+year, +month, +day);

    const dday = el.date.substring(8, 10);
    const mmonth = el.date.substring(5, 7);
    const yyear = el.date.substring(0, 4);

    const cDate = new Date(+yyear, +mmonth, +dday);

    return cDate >= fDate;
  });
}

function filterDateTill(
  list: personType[],
  filterDateTill: string
): personType[] {
  if (filterDateTill === "") {
    return list;
  }

  return list.filter((el) => {
    const day = filterDateTill.substring(8, 10);
    const month = filterDateTill.substring(5, 7);
    const year = filterDateTill.substring(0, 4);

    const fDate = new Date(+year, +month, +day);

    const dday = el.date.substring(8, 10);
    const mmonth = el.date.substring(5, 7);
    const yyear = el.date.substring(0, 4);

    const cDate = new Date(+yyear, +mmonth, +dday);

    return cDate <= fDate;
  });
}
