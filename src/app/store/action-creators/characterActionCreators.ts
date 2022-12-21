import { ActionType } from "../action-types/characterActionTypes"
import { Dispatch } from "react"
import { Action } from "../actions/characterActions"

export const changePage = (page:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHANGE_PAGE,
            payload: page
        })
    }
}