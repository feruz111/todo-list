import { FilterValuesType, TasksStateType, TodolistType } from "../App";
import { v1 } from "uuid";
import { act } from "react-dom/test-utils";
import {
  AddTodoListActionType,
  RemoveTodolistActionType,
} from "./todoLists-reducer";
import { TaskType } from "../Components/Todolist";

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

const initState: TasksStateType = {};

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
      let task = todolistTasks.find(t => t.id === action.taskId)
      if(task){
        task.isDone = action.isDone
      }
      state[action.todolistId] = [...todolistTasks]
      return {...state}
    }
    case "CHANGE-TASK-TITLE": {
      let todolistTasks = state[action.todolistId];
      let task = todolistTasks.find(t => t.id === action.taskId)
      if(task){
        task.title = action.title
      }
      state[action.todolistId] = [...todolistTasks]
      return {...state}
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
