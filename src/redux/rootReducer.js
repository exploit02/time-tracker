import { combineReducers } from "redux";
import { tagReducer } from "./tag/tagReducer";
import { taskReducer } from "./task/taskReducer";

export const rootReducer = combineReducers({
    tags: tagReducer,
    tasks: taskReducer,
});
