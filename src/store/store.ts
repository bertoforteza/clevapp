import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { postsReducer } from "./features/postsSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
