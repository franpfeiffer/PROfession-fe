"use client"

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import type { RootState, AppDispatch } from "../store"
import { getCurrentUser, loginUser, registerUser, logoutUser } from "../store/slices/authSlice"
import type { LoginCredentials, RegisterData } from "../types/user.types"

export const useAuth = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { user, isAuthenticated, isLoading, error } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (isAuthenticated && !user) {
            dispatch(getCurrentUser())
        }
    }, [isAuthenticated, user, dispatch])

    const login = async (credentials: LoginCredentials) => {
        return dispatch(loginUser(credentials))
    }

    const register = async (data: RegisterData) => {
        return dispatch(registerUser(data))
    }

    const logout = async () => {
        return dispatch(logoutUser())
    }

    return {
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        register,
        logout,
    }
}

