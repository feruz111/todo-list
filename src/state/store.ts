import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "../utils/localstorage-utils";
import { tasksReducer } from "./tasks-reducer";

import { todolistsReducer } from "./todoLists-reducer";
const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});

let persistedState = loadState();
export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);
export type AppRootStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  saveState(store.getState());
});

// @ts-ignore
window.store = store;
