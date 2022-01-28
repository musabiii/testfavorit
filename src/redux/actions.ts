import { actions } from "../types/types";



export const changePage =(page:string)=>{
    return {
        type:actions.CHANGE_PAGE,
        payload: page
    }
}

export const filterDateTill = (dateTill:string)=>{
    return {
        type:actions.FILTER_DATE_TILL,
        payload: dateTill
    }
}

export const filterDateFrom = (dateFrom:string)=>{
    return {
        type:actions.FILTER_DATE_FROM,
        payload: dateFrom
    }
}
export const filterName = (name:string)=>{
    return {
        type:actions.FILTER_NAME,
        payload: name
    }
}
export const filterTel = (tel:string)=>{
    return {
        type:actions.FILTER_TEL,
        payload: tel
    }
}