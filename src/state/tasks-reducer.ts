import { v1 } from "uuid";
import { TasksStateType } from "../App";
import { TaskType } from "../Components/Todolist";
import {
  AddTodoListActionType,
  RemoveTodolistActionType
} from "./todoLists-reducer";

export type RemoveTaskActionType = {
  type: "REMOVE-TASK";
  taskId: string;
  todolistId: string;
};
export type AddTaskActionType = {
  type: "ADD-TASK";
  title: string;
  todolistId: string;
};
export type ChangeTaskStatusType = {
  type: "CHANGE-TASK-STATUS";
  taskId: string;
  isDone: boolean;
  todolistId: string;
};
export type ChangeTaskTitleType = {
  type: "CHANGE-TASK-TITLE";
  taskId: string;
  title: string;
  todolistId: string;
};
type ActionsType =
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusType
  | ChangeTaskTitleType
  | AddTodoListActionType
  | RemoveTodolistActionType;

const initState: TasksStateType = {
  "1": [
    { id: "t1", title: "hooks", isDone: true },
    { id: "t2", title: "VDOM", isDone: false },
  ],
};

export const tasksReducer = (
  state: TasksStateType = initState,
  action: ActionsType
) => {
  switch (action.type) {
    case "REMOVE-TASK": {
      let copyState = { ...state };
      copyState[action.todolistId] = copyState[action.todolistId].filter(
        (task) => task.id !== action.taskId
      );
      return copyState;
    }
    case "ADD-TASK": {
      let newTask: TaskType = { id: v1(), title: action.title, isDone: false };
      let copyState = { ...state };

      copyState[action.todolistId] = [newTask, ...state[action.todolistId]];
      return copyState;
    }
    case "CHANGE-TASK-STATUS": {
      let todolistTasks = state[action.todolistId];
      state[action.todolistId] = todolistTasks.map((t) =>
        t.id === action.taskId ? { ...t, isDone: action.isDone } : t
      );
      return { ...state };
    }
    case "CHANGE-TASK-TITLE": {
      let todolistTasks = state[action.todolistId];
      state[action.todolistId] = todolistTasks.map((t) =>
        t.id === action.taskId ? { ...t, title: action.title } : t
      );
      return { ...state };
    }
    case "ADD-TODOLIST": {
      let todolistId = action.todolistId;
      return { ...state, [todolistId]: [] };
    }
    case "REMOVE-TODOLIST": {
      let copyState = { ...state };
      delete copyState[action.id];
      return copyState;
    }
    default:
      return state;
  }
};

export const removeTaskAC = (
  taskId: string,
  todolistId: string
): RemoveTaskActionType => {
  return { type: "REMOVE-TASK", taskId, todolistId };
};
export const addTaskAC = (
  title: string,
  todolistId: string
): AddTaskActionType => {
  return { type: "ADD-TASK", title, todolistId };
};
export const changeTaskStatusAC = (
  taskId: string,
  isDone: boolean,
  todolistId: string
): ChangeTaskStatusType => {
  return { type: "CHANGE-TASK-STATUS", taskId, isDone, todolistId };
};
export const changeTaskTitleAC = (
  taskId: string,
  title: string,
  todolistId: string
): ChangeTaskTitleType => {
  return { type: "CHANGE-TASK-TITLE", taskId, title, todolistId };
};
