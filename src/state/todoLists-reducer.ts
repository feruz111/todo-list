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
//   filterValue: any;
// };
export type ChangeTodolistFilterActionType = any;

type ActionType =
  | RemoveTodolistActionType
  | AddTodoListActionType
  | ChangeTodolistFilterActionType
  | ChangeTodolistTitleActionType;

export const todolistsReducer = (
  state: Array<TodolistType>,
  action: ActionType
) => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter((tl) => tl.id !== action.id);
    }
    case "ADD-TODOLIST": {
      let task = { id: v1(), title: action.title, isDone: false };
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
        todolist.filter = action.filterValue;
      }
      return [...state];
    }
    default: {
      throw new Error("I don't understand this type");
    }
  }
};

export const RemoveTodolistAC = (
  todolistId: string
): RemoveTodolistActionType => {
  return { type: "REMOVE-TODOLIST", id: todolistId };
};
export const AddTodolistAC = (
  todolistId: string,
  title: string
): AddTodoListActionType => {
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
  filterValue: any
): ChangeTodolistFilterActionType => {
  return { type: "CHANGE-TODOLIST-FILTER", id: todolistId, filterValue };
};
