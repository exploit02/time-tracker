import { CREATE_TAG } from "./actionType";

const initailState = {
    tags: [],
};
export const tagReducer = (state = initailState, action) => {
    switch (action.type) {
        case CREATE_TAG:
            return {
                ...state,
                tags: [...state.tags, { ...action.payload }],
            };
        default:
            return state;
    }
};
