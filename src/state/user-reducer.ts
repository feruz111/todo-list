import React from "react";
import {act} from "react-dom/test-utils";

type StateType = {
  age: number;
  childrenCount: number;
  name: string;
};
type ActionType = {
  type: string;
  [key: string]: any;
  newName: string
};

export const userReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT-AGE": {
        let newState = { ...state };
      newState.age = state.age + 1;
      return newState;
    }
    case "INCREMENT-CHILDREN-COUNT": {
        let newState = { ...state };
      newState.childrenCount = state.childrenCount + 1;
      return newState;
    }
    case 'CHANGE-NAME':{
      return {...state,name:action.newName}
    }
    default:{
        throw new Error("I don't understand this type")
    }
  }
};
