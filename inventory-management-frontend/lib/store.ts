import { Action, combineSlices, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userApiSlice, UserAuthSlice } from "./features/users/usersApiSlice";

const rootReducer = combineSlices(userApiSlice, UserAuthSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(userApiSlice.middleware).concat(UserAuthSlice.middleware);
    },
  })
  
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>