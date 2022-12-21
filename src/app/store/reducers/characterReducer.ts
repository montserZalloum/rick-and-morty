import { ActionType } from "../action-types/characterActionTypes";
import { Action } from "../actions/characterActions";

interface ICharacterState {
    page: Number
}
const initialState:ICharacterState = {
    page: 1
}

const reducer = (state = initialState,action:Action) => {
    switch (action.type) {
        case ActionType.CHANGE_PAGE:
            state.page = action.payload;
            return {...state}
        default:
            return state;
    }

}

export default reducer