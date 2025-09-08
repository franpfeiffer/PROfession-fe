import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import jobsSlice from "./slices/jobsSlice"
import uiSlice from "./slices/uiSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        jobs: jobsSlice,
        ui: uiSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

