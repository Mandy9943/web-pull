import { combineReducers, createStore } from "redux";
import optionDisplayReducer from "./Reducers/optionReducer";
import IOptionState from "./types/OptionState/IOptionState";
import squareTextDisplayReducer from "./Reducers/squareTextReducer";
import ISquareTextState from "./types/SquareTesxtState/ISquareTextState";
import submitReducer from "./Reducers/submitReducer";
import ISubmitState from "./types/SubmitState/ISubmitState";
import { useMemo } from "react";

export interface IApplicationState {
  optionDisplay: IOptionState;
  squareTextDisplay: ISquareTextState;
  message: ISubmitState;
}

const rootReducer = combineReducers<IApplicationState>({
  optionDisplay: optionDisplayReducer,
  squareTextDisplay: squareTextDisplayReducer,
  message: submitReducer,
});

let store;

const initialState = {};

function initStore(preloadedState = initialState) {
  return createStore(rootReducer, preloadedState);
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  _store.subscribe(() => {
    console.log("state", store.getState());
  });
  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
