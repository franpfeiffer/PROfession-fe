import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import authServiceInstance from "../../services/auth.service"
import type { User, LoginCredentials, RegisterData } from "../../types/user.types"

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: authServiceInstance.isAuthenticated(),
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk("auth/login", async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
        const response = await authServiceInstance.login(credentials)
        return response.user
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const registerUser = createAsyncThunk("auth/register", async (data: RegisterData, { rejectWithValue }) => {
    try {
        const response = await authServiceInstance.register(data)
        return response.user
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const getCurrentUser = createAsyncThunk("auth/getCurrentUser", async (_, { rejectWithValue }) => {
    try {
        return await authServiceInstance.getCurrentUser()
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        await authServiceInstance.logout()
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.isAuthenticated = true
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
                state.isAuthenticated = false
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                state.isAuthenticated = true
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
                state.isAuthenticated = false
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.isAuthenticated = true
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.user = null
                state.isAuthenticated = false
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.isAuthenticated = false
                state.error = null
            })
    },
})

export const { clearError, setUser } = authSlice.actions
export default authSlice.reducer

