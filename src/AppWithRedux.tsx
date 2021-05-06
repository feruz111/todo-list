import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemForm } from "./Components/AddItemForm";
import { TaskType, Todolist } from "./Components/Todolist";
import { AppRootStateType } from "./state/store";
import {
  addTaskAC,
  changeTaskStatusAC,
  changeTaskTitleAC,
  removeTaskAC,
} from "./state/tasks-reducer";
import {
  AddTodolistAC,
  ChangeTodolistFilterAC,
  ChangeTodolistTitleAC,
  RemoveTodolistAC,
} from "./state/todoLists-reducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

const AppwithRedux = React.memo(() => {
  const todolists = useSelector<AppRootStateType, Array<TodolistType>>(
    (state) => state.todolists
  );
  const tasks = useSelector<AppRootStateType, TasksStateType>(
    (state) => state.tasks
  );
  let dispatch = useDispatch();

  const removeTask = useCallback((id: string, todolistId: string) => {
    let action = removeTaskAC(id, todolistId);
    dispatch(action);
  }, []);

  const addTask = useCallback((title: string, todolistId: string) => {
    let action = addTaskAC(title, todolistId);
    dispatch(action);
  }, []);

  const changeFilter = useCallback(
    (todolistId: string, value: FilterValuesType) => {

      let action = ChangeTodolistFilterAC(todolistId, value);
      dispatch(action);
    },
    []
  );

  const changeStatus = useCallback(
    (id: string, isDone: boolean, todolistId: string) => {
      let action = changeTaskStatusAC(id, isDone, todolistId);
      dispatch(action);
    },
    []
  );
  const changeTaskTitle = useCallback(
    (id: string, newTitle: string, todolistId: string) => {
      let action = changeTaskTitleAC(id, newTitle, todolistId);
      dispatch(action);
    },
    []
  );

  const removeTodolist = useCallback((id: string) => {
    let action = RemoveTodolistAC(id);
    dispatch(action);
  }, []);
  const changeTodolistTitle = useCallback((id: string, title: string) => {
    let action = ChangeTodolistTitleAC(id, title);
    dispatch(action);
  }, []);
  const addTodolist = useCallback((title: string) => {
    let action = AddTodolistAC(title);
    dispatch(action);
  }, []);
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{ padding: "20px" }}>
          <AddItemForm addItem={addTodolist} />
        </Grid>
        <Grid container spacing={3}>
          {todolists.map((tl: any) => {
            let allTodolistTasks = tasks[tl.id];
            let tasksForTodolist = allTodolistTasks;

            return (
              <Grid item>
                <Paper style={{ padding: "10px" }}>
                  <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    changeTaskTitle={changeTaskTitle}
                    changeTodolistTitle={changeTodolistTitle}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
});

export default AppwithRedux;
