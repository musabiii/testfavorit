export {};

export enum actions {
  LOAD_CUSTOMERS = "LOAD_CUSTOMERS",
  CHANGE_PAGE = "CHANGE_PAGE",
  FILTER_DATE_TILL = 'FILTER_DATE_TILL',
  FILTER_DATE_FROM = 'FILTER_DATE_FROM',
  FILTER_NAME = 'FILTER_NAME',
  FILTER_TEL = 'FILTER_TEL',
}

export interface actionType {
  type: string;
  payload: any;
}

export interface personType {
  date: string;
  id: number;
  tel: string;
  name: string;
}

export interface filterType {
    dateTill:string,
    dateFrom:string,
    name:string,
    tel:string
}

export interface stateTypes {
  customers: personType[];
  employees: personType[];
  currentPage: String;
  filter:filterType
}

export enum pages {
  main = "main",
  customers = "customers",
  employees = "employees",
  analytics = "analytics",
}
