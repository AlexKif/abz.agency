export const initialState = {};


export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACCOUNT_SAVE_SUCCESS:
            return undefined;       // <--- blow away form data
        default:
            return state;
    }
}