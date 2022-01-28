import { actions, actionType, pages, stateTypes } from "../types/types";

const initialState: stateTypes = {
  customers: [
    {
      id: 1,
      name: "Андрей",
      date: "12-05-2021",
      tel: "56542",
    },
    {
        id: 2,
        name: "Дмитрий",
        date: "12-05-2021",
        tel: "6541",
      },
      {
        id: 3,
        name: "Денис",
        date: "12-06-2021",
        tel: "56542",
      },
      {
        id: 4,
        name: "Булат",
        date: "12-05-2020",
        tel: "5995",
      },
  ],
  employees: [
    {
      id: 1,
      name: "Николай",
      date: "2021-05-12",
      tel: "4556",
    },
    {
      id: 2,
      name: "Василий",
      date: "2020-06-12",
      tel: "8922",
    },
    {
      id: 3,
      name: "Инокентий",
      date: "2018-01-01",
      tel: "976",
    },
    {
      id: 4,
      name: "Всеволод",
      date: "2021-05-12",
      tel: "888",
    },
    {
      id: 5,
      name: "Благояр",
      date: "2020-06-12",
      tel: "777",
    },
    {
      id: 6,
      name: "Игорь Петрович",
      date: "2018-01-01",
      tel: "6767",
    },
    {
      id: 7,
      name: "Петя",
      date: "2021-05-12",
      tel: "626",
    },
    {
      id: 8,
      name: "Тихон",
      date: "2020-06-12",
      tel: "345",
    },
    {
      id: 9,
      name: "Титомир",
      date: "2018-01-01",
      tel: "443",
    },
    {
      id: 10,
      name: "Володимир",
      date: "2021-05-12",
      tel: "222",
    },
    {
      id: 11,
      name: "Микола",
      date: "2020-06-12",
      tel: "23222",
    },
    {
      id: 12,
      name: "Alby",
      date: "2018-01-01",
      tel: "23223",
    },
  ],
  currentPage: pages.main,
  filter: {
    dateFrom: "",
    dateTill: "",
    name: "",
    tel: "",
  },
};

export const reducer = (
  state: stateTypes = initialState,
  action: actionType
): stateTypes => {
  switch (action.type) {
    case actions.LOAD_CUSTOMERS:
      return state;

    case actions.CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case actions.FILTER_DATE_FROM:
      const newFilter = { ...state.filter, dateFrom: action.payload };
      return { ...state, filter: newFilter };
    case actions.FILTER_DATE_TILL:
      const newFilterTill = { ...state.filter, dateTill: action.payload };
      return { ...state, filter: newFilterTill };
    case actions.FILTER_NAME:
      const newFilterName = { ...state.filter, name: action.payload };
      return { ...state, filter: newFilterName };
    case actions.FILTER_TEL:
      const newFilterTel = { ...state.filter, tel: action.payload };
      return { ...state, filter: newFilterTel };

    default:
      return state;
  }
};
