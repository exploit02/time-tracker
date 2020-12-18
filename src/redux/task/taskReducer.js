import { CREATE_TASK, START_TASK, STOP_TASK, DELETE_TASK } from "./actionTypes";

const initialState = {
    tasks: [],
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { ...action.payload }],
            };
        case START_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item._id === action.payload) {
                        return {
                            ...item,
                            start: true,
                            startedAt: new Date(),
                        };
                    } else {
                        return item;
                    }
                }),
            };
        case STOP_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item._id === action.payload) {
                        return {
                            ...item,
                            start: false,
                            stop: true,
                            stoppedAt: new Date(),
                        };
                    } else {
                        return item;
                    }
                }),
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((item) => item._id !== action.payload),
            };

        default:
            return state;
    }
};
