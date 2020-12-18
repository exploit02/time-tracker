import { CREATE_TAG, DELETE_TAG } from "./actionType";

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

        case DELETE_TAG:
            return {
                ...state,
                tags: state.tags.filter((item) => item._id !== action.payload),
            };
        default:
            return state;
    }
};
