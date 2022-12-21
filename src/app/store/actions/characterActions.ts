import { ActionType } from "../action-types/characterActionTypes";
interface changePage {
    type: ActionType.CHANGE_PAGE,
    payload: number
}
export type Action = changePage;