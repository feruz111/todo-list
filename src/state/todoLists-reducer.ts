import { FilterValuesType, TodolistType } from "../App";
import { v1 } from "uuid";

export type RemoveTodolistActionType = {
  type: "REMOVE-TODOLIST";
  id: string;
};

export type AddTodoListActionType = {
  type: "ADD-TODOLIST";
  title: string;
  todolistId: string;
};

type ChangeTodolistTitleActionType = {
  type: "CHANGE-TODOLIST-TITLE";
  id: string;
  title: string;
};

// export type ChangeTodolistFilterActionType = {
//   type: "CHANGE-TODOLIST-FILTER";
//   id: string;
//   filter: FilterValuesType;
// };

export type ChangeTodolistFilterActionType = any;


type ActionType =
  | RemoveTodolistActionType
  | AddTodoListActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;

const initState: Array<TodolistType> = [];

export const todolistsReducer = (
  state: Array<TodolistType> = initState,
  action: ActionType
) => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((tl) => tl.id !== action.id);
    }
    case "ADD-TODOLIST": {
      let task = { id: action.todolistId, title: action.title, isDone: false };
      return [...state, task];
    }
    case "CHANGE-TODOLIST-TITLE": {
      const todolist = state.find((tl) => tl.id === action.id);
      if (todolist) {
        todolist.title = action.title;
        return [...state];
      }
    }
    case "CHANGE-TODOLIST-FILTER": {

      const todolist = state.find((tl) => tl.id === action.id);
      if (todolist) {
        todolist.filter = action.filter;
      }
      debugger
      return [...state];
    }
    default: {
      return state;
    }
  }
};

export const RemoveTodolistAC = (
  todolistId: string
): RemoveTodolistActionType => {
  return { type: "REMOVE-TODOLIST", id: todolistId };
};
export const AddTodolistAC = (title: string): AddTodoListActionType => {
  return { type: "ADD-TODOLIST", title, todolistId: v1() };
};
export const ChangeTodolistTitleAC = (
  todolistId: string,
  title: string
): ChangeTodolistTitleActionType => {
  return { type: "CHANGE-TODOLIST-TITLE", id: todolistId, title };
};
export const ChangeTodolistFilterAC = (
  todolistId: string,
  filter: FilterValuesType
): ChangeTodolistFilterActionType => {
  return { type: "CHANGE-TODOLIST-FILTER", id: todolistId, filter };
};
